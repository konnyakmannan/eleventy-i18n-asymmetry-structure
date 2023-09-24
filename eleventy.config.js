const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: "en",
	});
};
