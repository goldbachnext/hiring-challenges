
// Source: https://www.iab-switzerland.ch/standardsundleitfaeden/werbemittel-standards/werbeformate/



let standardSizes:googletag.GeneralSize = [
		// Standardisierte Werbeformate
		// IAB Fullbanner
		[468, 60],
		// IAB Leaderboard
		[728, 90],
		// IAB Wide Skyscraper
		[160, 600],
		// IAB Medium Rectangle
		[300, 250],

		// Spezialformate Schweiz

		// Exp. Wide Skyscraper 160 (300) x 600
		[160, 600],[300, 600],
		// Exp. Leaderboard 728 x 90 (300)
		[728, 90], [728, 300],
		// Exp. Rectangle 300 (400) x 250 (400)
		[300, 250], [300, 400],
		[400, 250], [400, 400],
		// Monsterboard 468 x 400
		[468, 400],
		// Wallpaper 728 x 90 & 160 x 600
		[728, 90], [160, 600],
		// Layer Ad* 400 x 400
		[400, 400],
		// Billboard 970 x 250
		[970, 250],
		// Wideboard 994 x 250
		[994, 250],
		// Halfpage-Ad 300 x 600
		[300, 600],
		// Wallpaper XL 994 x 118 & 160 x 600
		[994, 118], [160, 600],
		// Wallpaper XXL 994 x 118 & 245 x 600
		[994, 118], [245, 600],
		// Maxiboard 194 x 118 & 245 x 600
		[194, 118], [245, 600],
		// Maxi Skyscraper (Monster Skyscraper) 245 x 600 
		[245, 600],

		//non-iab standard but google specific size
	    "fluid"
	];

export default standardSizes;