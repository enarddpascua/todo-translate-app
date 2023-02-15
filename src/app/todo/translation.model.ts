export interface TranslationRequestBody{
    q:string|undefined,
    source: string|undefined,
    target: string,
    format: string
}

export interface TranslationResponseBody{
    data: {
        translations: [
            {
                translatedText: string
            }
        ]
    }
}