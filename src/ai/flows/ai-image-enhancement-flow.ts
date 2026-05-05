'use server';
/**
 * @fileOverview A Genkit flow for enhancing project images for the gallery.
 *
 * - enhanceProjectImage - A function that enhances an uploaded project image.
 * - EnhanceProjectImageInput - The input type for the enhanceProjectImage function.
 * - EnhanceProjectImageOutput - The return type for the enhanceProjectImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const EnhanceProjectImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A raw project photo, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type EnhanceProjectImageInput = z.infer<typeof EnhanceProjectImageInputSchema>;

// Output Schema
const EnhanceProjectImageOutputSchema = z.object({
  enhancedPhotoDataUri: z
    .string()
    .describe(
      "The enhanced project photo, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type EnhanceProjectImageOutput = z.infer<typeof EnhanceProjectImageOutputSchema>;

export async function enhanceProjectImage(input: EnhanceProjectImageInput): Promise<EnhanceProjectImageOutput> {
  return enhanceProjectImageFlow(input);
}

// Define the prompt without an explicit output schema for text, as the primary output is an image.
// The model will generate the image based on the input image and text instructions.
const enhanceProjectImagePrompt = ai.definePrompt({
  name: 'enhanceProjectImagePrompt',
  input: {schema: EnhanceProjectImageInputSchema},
  prompt: `You are an expert image editor for a construction company's website.
    Enhance the provided project photo to look professional, high-quality, and authoritative for a gallery display.
    Apply the following visual treatments:
    - Intelligent cropping to focus on the key construction elements, ensuring a strong composition suitable for a gallery grid.
    - Adjust brightness and contrast for optimal clarity and visual impact.
    - Apply a subtle, professional color overlay using the brand's primary colors (orange: #ED862D, gray, white) to unify the aesthetic. Prioritize a desaturated orange or a neutral gray tint for the overlay.
    - Add slightly rounded borders to the image.
    - Ensure the final image contributes to a modern, strong, and professional construction civil style, similar to reputable industry websites (like fgr.com.br as a style reference, not to be copied).
    The output should be a single, enhanced image that is ready for display in a project gallery.

    Project Photo: {{media url=photoDataUri}}`,
});

const enhanceProjectImageFlow = ai.defineFlow(
  {
    name: 'enhanceProjectImageFlow',
    inputSchema: EnhanceProjectImageInputSchema,
    outputSchema: EnhanceProjectImageOutputSchema, // This flow will output the structured object
  },
  async (input) => {
    // Call ai.generate with the image generation model and the prompt.
    // The `prompt` function will render the handlebars template into parts for the model.
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image',
      prompt: enhanceProjectImagePrompt(input), // The rendered prompt with media and text parts.
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // Request both text and image, but we're primarily interested in the image.
      },
    });

    if (!response || !response.media || response.media.length === 0 || !response.media[0].url) {
      throw new Error('Failed to generate enhanced image. No media returned.');
    }

    return {
      enhancedPhotoDataUri: response.media[0].url,
    };
  }
);
