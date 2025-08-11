// When running tests, importing static files (like .png, .svg, or .jpg) is not
// useful because they are not executable JavaScript. Jest needs to handle these
// files to prevent errors during the import. By exporting a simple string (like 'test-file-stub'),
// you can mock these imports and avoid issues.

module.exports = 'test-file-stub';
