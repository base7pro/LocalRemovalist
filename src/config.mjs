export const SITE = {
	name: 'Brisbane and Gold Coast Removalists | LocalRemovalist.com.au',

	origin: 'https://localremovalist.com.au/',
	basePathname: '/',
	trailingSlash: false,

	title: 'Brisbane and Gold Coast Removalists | Local Removalist',
	description: 'Choose Local Removalist for your Brisbane to Gold Coast moving needs at unbeatable prices! Our expert team provides top-notch furniture removal services as the leading removalists from Gold Coast to Brisbane.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
