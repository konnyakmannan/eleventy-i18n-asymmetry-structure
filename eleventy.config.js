const eleventyNavigation = require("@11ty/eleventy-navigation");
const { EleventyI18nPlugin } = require("@11ty/eleventy");

const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
	eleventyConfig.ignores.add("README.md");

	eleventyConfig.addPlugin(eleventyNavigation);
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

	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "yyyy-LL-dd");
	});

	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

	return {
		markdownTemplateEngine: "njk",
	  dir: {
			layouts: "_layouts"
		}
	};
};
