from watson_developer_cloud import SpeechToTextV1

speech_to_text = SpeechToTextV1(
    iam_apikey='EovOzTbczUH5DsI7ZzI83KGr6mIODNA8KY3lGSkbJ32S',
    url='https://stream.watsonplatform.net/speech-to-text/api'
)

recognize(self, audio, content_type=None, model=None, language_customization_id=None, acoustic_customization_id=None, base_model_version=None, customization_weight=None, inactivity_timeout=None, keywords=None, keywords_threshold=None, max_alternatives=None, word_alternatives_threshold=None, word_confidence=None, timestamps=None, profanity_filter=None, smart_formatting=None, speaker_labels=None, customization_id=None, grammar_name=None, redaction=None, **kwargs)