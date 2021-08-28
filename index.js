"use strict";

module.exports = {
	rules: {
		"brace-style": [ "error", "stroustrup", { "allowSingleLine": true } ],
		"indent": [ "error", "tab", { "SwitchCase": 1 } ],
		"no-mixed-spaces-and-tabs": [ "off" ],
		"no-tabs": [ "off" ],
		"quotes": [ "error", "double", { "avoidEscape": true, "allowTemplateLiterals": true } ],
		"semi": [ "error", "always" ],
		"space-before-function-paren": [ "error", {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		} ]
	}
};
