module.exports = {
  // Server values
  port: process.env.PORT || 3000,
  host: process.env.VCAP_APP_HOST || 'localhost',

  // App values

  // Watson values
  watson: {
    opt_out_logging: process.env.WATSON_OPT_OUT_LOGGING || false,
    conversation: {
      username:
        process.env.WATSON_CONVERSATION_USERNAME ||
        '2b05c744-4a1e-45bb-8fdf-a99c6c2f5849',
      password: process.env.WATSON_CONVERSATION_PASSWORD || 'mLHVFJBMUszq',
      workspace:
        process.env.WATSON_CONVERSATION_WORKSPACE ||
        'ec98a505-4776-45e9-bd24-cc252b368df6',
    },
    discovery: {
      username:
        process.env.WATSON_DISCOVERY_USERNAME ||
        'c8a98ed7-fdb8-4e3d-aa54-d8ca23238a04',
      password: process.env.WATSON_DISCOVERY_PASSWORD || 'rXaCCQnDQLlM',
      url:
        process.env.WATSON_DISCOVERY_URL ||
        'https://gateway.watsonplatform.net/discovery/api',
      collection: process.env.WATSON_DISCOVERY_COLLECTION || 'news',
      environment: process.env.WATSON_DISCOVERY_ENVIRONMENT || 'system',
      version_date: process.env.WATSON_DISCOVERY_VERSION_DATE || '2017-11-07',
    },
    speech_to_text: {
      username:
        process.env.WATSON_STT_USERNAME ||
        '6bab02f2-03f9-4bad-9372-2237ee75144c',
      password: process.env.WATSON_STT_PASSWORD || '2aDXJaOlNMuf',
      url:
        process.env.WATSON_STT_URL ||
        'https://stream.watsonplatform.net/speech-to-text/api',
    },
  },
};
