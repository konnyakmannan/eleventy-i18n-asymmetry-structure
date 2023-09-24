const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
	eleventyConfig.ignores.add("README.md");

	eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: "en",
	});

	eleventyConfig.addFilter('locale_pages', function(collection, lang=this.page.lang) {
		let pageArray = [];
		for(let item of collection) {
			let itemLang = item.url.split('/')[1]
			if(itemLang == lang) {
				pageArray.push(item);
			}
		}
		return pageArray;
	});

	return {
	  dir: {
			layouts: "_layouts"
		}
	};
};
