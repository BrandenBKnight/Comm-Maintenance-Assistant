const sitesArray = [
	{
		groupName: "319th Squadron",
		subGroups: [
			{
				subGroupName: "Alpha",
				sites: [
					"A-01",
					"A-02",
					"A-03",
					"A-04",
					"A-05",
					"A-06",
					"A-07",
					"A-08",
					"A-09",
					"A-10",
					"A-11",
				],
			},
			{
				subGroupName: "Bravo",
				sites: [
					"B-01",
					"B-02",
					"B-03",
					"B-04",
					"B-05",
					"B-06",
					"B-07",
					"B-08",
					"B-09",
					"B-10",
					"B-11",
				],
			},
			{
				subGroupName: "Charlie",
				sites: [
					"C-01",
					"C-02",
					"C-03",
					"C-04",
					"C-05",
					"C-06",
					"C-07",
					"C-08",
					"C-09",
					"C-10",
					"C-11",
				],
			},
			{
				subGroupName: "Delta",
				sites: [
					"D-01",
					"D-02",
					"D-03",
					"D-04",
					"D-05",
					"D-06",
					"D-07",
					"D-08",
					"D-09",
					"D-10",
					"D-11",
				],
			},
			{
				subGroupName: "Echo",
				sites: [
					"E-01",
					"E-02",
					"E-03",
					"E-04",
					"E-05",
					"E-06",
					"E-07",
					"E-08",
					"E-09",
					"E-10",
					"E-11",
				],
			},
		],
	},
	{
		groupName: "320th Squadron",
		subGroups: [
			{
				subGroupName: "Foxtrot",
				sites: [
					"F-01",
					"F-02",
					"F-03",
					"F-04",
					"F-05",
					"F-06",
					"F-07",
					"F-08",
					"F-09",
					"F-10",
					"F-11",
				],
			},
			{
				subGroupName: "Golf",
				sites: [
					"G-01",
					"G-02",
					"G-03",
					"G-04",
					"G-05",
					"G-06",
					"G-07",
					"G-08",
					"G-09",
					"G-10",
					"G-11",
				],
			},
			{
				subGroupName: "Hotel",
				sites: [
					"H-01",
					"H-02",
					"H-03",
					"H-04",
					"H-05",
					"H-06",
					"H-07",
					"H-08",
					"H-09",
					"H-10",
					"H-11",
				],
			},
			{
				subGroupName: "India",
				sites: [
					"I-01",
					"I-02",
					"I-03",
					"I-04",
					"I-05",
					"I-06",
					"I-07",
					"I-08",
					"I-09",
					"I-10",
					"I-11",
				],
			},
			{
				subGroupName: "Julie",
				sites: [
					"J-01",
					"J-02",
					"J-03",
					"J-04",
					"J-05",
					"J-06",
					"J-07",
					"J-08",
					"J-09",
					"J-10",
					"J-11",
				],
			},
		],
	},
	{
		groupName: "321st Squadron",
		subGroups: [
			{
				subGroupName: "Kilo",
				sites: [
					"K-01",
					"K-02",
					"K-03",
					"K-04",
					"K-05",
					"K-06",
					"K-07",
					"K-08",
					"K-09",
					"K-10",
					"K-11",
				],
			},
			{
				subGroupName: "Lima",
				sites: [
					"L-01",
					"L-02",
					"L-03",
					"L-04",
					"L-05",
					"L-06",
					"L-07",
					"L-08",
					"L-09",
					"L-10",
					"L-11",
				],
			},
			{
				subGroupName: "Mike",
				sites: [
					"M-01",
					"M-02",
					"M-03",
					"M-04",
					"M-05",
					"M-06",
					"M-07",
					"M-08",
					"M-09",
					"M-10",
					"M-11",
				],
			},
			{
				subGroupName: "November",
				sites: [
					"N-01",
					"N-02",
					"N-03",
					"N-04",
					"N-05",
					"N-06",
					"N-07",
					"N-08",
					"N-09",
					"N-10",
					"N-11",
				],
			},
			{
				subGroupName: "Oscar",
				sites: [
					"O-01",
					"O-02",
					"O-03",
					"O-04",
					"O-05",
					"O-06",
					"O-07",
					"O-08",
					"O-09",
					"O-10",
					"O-11",
				],
			},
		],
	},
];

const totalDistances = [
	"3", //A-01
	"3", //A-02
	"3", //A-03
	"3", //A-04
	"3", //A-05
	"3", //A-06
	"3", //A-07
	"3", //A-08
	"3", //A-09
	"3", //A-10
	"3", //A-11
	"3", //B-01
	"3", //B-02
	"3", //B-03
	"3", //B-04
	"3", //B-05
	"3", //B-06
	"3", //B-07
	"3", //B-08
	"3", //B-09
	"3", //B-10
	"3", //B-11
	"3", //C-01
	"3", //C-02
	"3", //C-03
	"3", //C-04
	"3", //C-05
	"3", //C-06
	"3", //C-07
	"3", //C-08
	"3", //C-09
	"3", //C-10
	"3", //C-11
	"3", //D-01
	"3", //D-02
	"3", //D-03
	"3", //D-04
	"3", //D-05
	"3", //D-06
	"3", //D-07
	"3", //D-08
	"3", //D-09
	"3", //D-10
	"3", //D-11
	"3", //E-01
	"3", //E-02
	"3", //E-03
	"3", //E-04
	"3", //E-05
	"3", //E-06
	"3", //E-07
	"3", //E-08
	"3", //E-09
	"3", //E-10
	"3", //E-11
	"3", //F-01
	"3", //F-02
	"3", //F-03
	"3", //F-04
	"3", //F-05
	"3", //F-06
	"3", //F-07
	"3", //F-08
	"3", //F-09
	"3", //F-10
	"3", //F-11
	"3", //G-01
	"3", //G-02
	"3", //G-03
	"3", //G-04
	"3", //G-05
	"3", //G-06
	"3", //G-07
	"3", //G-08
	"3", //G-09
	"3", //G-10
	"3", //G-11
	"3", //H-01
	"3", //H-02
	"3", //H-03
	"3", //H-04
	"3", //H-05
	"3", //H-06
	"3", //H-07
	"3", //H-08
	"3", //H-09
	"3", //H-10
	"3", //H-11
	"3", //I-01
	"3", //I-02
	"3", //I-03
	"3", //I-04
	"3", //I-05
	"3", //I-06
	"3", //I-07
	"3", //I-08
	"3", //I-09
	"3", //I-10
	"3", //I-11
	"3", //J-01
	"3", //J-02
	"3", //J-03
	"3", //J-04
	"3", //J-05
	"3", //J-06
	"3", //J-07
	"3", //J-08
	"3", //J-09
	"3", //J-10
	"3", //J-11
	"3", //K-01
	"3", //K-02
	"3", //K-03
	"3", //K-04
	"3", //K-05
	"3", //K-06
	"3", //K-07
	"3", //K-08
	"3", //K-09
	"3", //K-10
	"3", //K-11
	"3", //L-01
	"3", //L-02
	"3", //L-03
	"3", //L-04
	"3", //L-05
	"3", //L-06
	"3", //L-07
	"3", //L-08
	"3", //L-09
	"3", //L-10
	"3", //L-11
	"3", //M-01
	"3", //M-02
	"3", //M-03
	"3", //M-04
	"3", //M-05
	"3", //M-06
	"3", //M-07
	"3", //M-08
	"3", //M-09
	"3", //M-10
	"3", //M-11
	"3", //N-01
	"3", //N-02
	"3", //N-03
	"3", //N-04
	"3", //N-05
	"3", //N-06
	"3", //N-07
	"3", //N-08
	"3", //N-09
	"3", //N-10
	"3", //N-11
	"3", //O-01
	"3", //O-02
	"3", //O-03
	"3", //O-04
	"3", //O-05
	"3", //O-06
	"3", //O-07
	"3", //O-08
	"3", //O-09
	"3", //O-10
	"3", //O-11
];
const pavedDistances = [
	"2", //A-01
	"2", //A-02
	"2", //A-03
	"2", //A-04
	"2", //A-05
	"2", //A-06
	"2", //A-07
	"2", //A-08
	"2", //A-09
	"2", //A-10
	"2", //A-11
	"2", //B-01
	"2", //B-02
	"2", //B-03
	"2", //B-04
	"2", //B-05
	"2", //B-06
	"2", //B-07
	"2", //B-08
	"2", //B-09
	"2", //B-10
	"2", //B-11
	"2", //C-01
	"2", //C-02
	"2", //C-03
	"2", //C-04
	"2", //C-05
	"2", //C-06
	"2", //C-07
	"2", //C-08
	"2", //C-09
	"2", //C-10
	"2", //C-11
	"2", //D-01
	"2", //D-02
	"2", //D-03
	"2", //D-04
	"2", //D-05
	"2", //D-06
	"2", //D-07
	"2", //D-08
	"2", //D-09
	"2", //D-10
	"2", //D-11
	"2", //E-01
	"2", //E-02
	"2", //E-03
	"2", //E-04
	"2", //E-05
	"2", //E-06
	"2", //E-07
	"2", //E-08
	"2", //E-09
	"2", //E-10
	"2", //E-11
	"2", //F-01
	"2", //F-02
	"2", //F-03
	"2", //F-04
	"2", //F-05
	"2", //F-06
	"2", //F-07
	"2", //F-08
	"2", //F-09
	"2", //F-10
	"2", //F-11
	"2", //G-01
	"2", //G-02
	"2", //G-03
	"2", //G-04
	"2", //G-05
	"2", //G-06
	"2", //G-07
	"2", //G-08
	"2", //G-09
	"2", //G-10
	"2", //G-11
	"2", //H-01
	"2", //H-02
	"2", //H-03
	"2", //H-04
	"2", //H-05
	"2", //H-06
	"2", //H-07
	"2", //H-08
	"2", //H-09
	"2", //H-10
	"2", //H-11
	"2", //I-01
	"2", //I-02
	"2", //I-03
	"2", //I-04
	"2", //I-05
	"2", //I-06
	"2", //I-07
	"2", //I-08
	"2", //I-09
	"2", //I-10
	"2", //I-11
	"2", //J-01
	"2", //J-02
	"2", //J-03
	"2", //J-04
	"2", //J-05
	"2", //J-06
	"2", //J-07
	"2", //J-08
	"2", //J-09
	"2", //J-10
	"2", //J-11
	"2", //K-01
	"2", //K-02
	"2", //K-03
	"2", //K-04
	"2", //K-05
	"2", //K-06
	"2", //K-07
	"2", //K-08
	"2", //K-09
	"2", //K-10
	"2", //K-11
	"2", //L-01
	"2", //L-02
	"2", //L-03
	"2", //L-04
	"2", //L-05
	"2", //L-06
	"2", //L-07
	"2", //L-08
	"2", //L-09
	"2", //L-10
	"2", //L-11
	"2", //M-01
	"2", //M-02
	"2", //M-03
	"2", //M-04
	"2", //M-05
	"2", //M-06
	"2", //M-07
	"2", //M-08
	"2", //M-09
	"2", //M-10
	"2", //M-11
	"2", //N-01
	"2", //N-02
	"2", //N-03
	"2", //N-04
	"2", //N-05
	"2", //N-06
	"2", //N-07
	"2", //N-08
	"2", //N-09
	"2", //N-10
	"2", //N-11
	"2", //O-01
	"2", //O-02
	"2", //O-03
	"2", //O-04
	"2", //O-05
	"2", //O-06
	"2", //O-07
	"2", //O-08
	"2", //O-09
	"2", //O-10
	"2", //O-11
];
const gravelDistances = [
	"1", //A-01
	"1", //A-02
	"1", //A-03
	"1", //A-04
	"1", //A-05
	"1", //A-06
	"1", //A-07
	"1", //A-08
	"1", //A-09
	"1", //A-10
	"1", //A-11
	"1", //B-01
	"1", //B-02
	"1", //B-03
	"1", //B-04
	"1", //B-05
	"1", //B-06
	"1", //B-07
	"1", //B-08
	"1", //B-09
	"1", //B-10
	"1", //B-11
	"1", //C-01
	"1", //C-02
	"1", //C-03
	"1", //C-04
	"1", //C-05
	"1", //C-06
	"1", //C-07
	"1", //C-08
	"1", //C-09
	"1", //C-10
	"1", //C-11
	"1", //D-01
	"1", //D-02
	"1", //D-03
	"1", //D-04
	"1", //D-05
	"1", //D-06
	"1", //D-07
	"1", //D-08
	"1", //D-09
	"1", //D-10
	"1", //D-11
	"1", //E-01
	"1", //E-02
	"1", //E-03
	"1", //E-04
	"1", //E-05
	"1", //E-06
	"1", //E-07
	"1", //E-08
	"1", //E-09
	"1", //E-10
	"1", //E-11
	"1", //F-01
	"1", //F-02
	"1", //F-03
	"1", //F-04
	"1", //F-05
	"1", //F-06
	"1", //F-07
	"1", //F-08
	"1", //F-09
	"1", //F-10
	"1", //F-11
	"1", //G-01
	"1", //G-02
	"1", //G-03
	"1", //G-04
	"1", //G-05
	"1", //G-06
	"1", //G-07
	"1", //G-08
	"1", //G-09
	"1", //G-10
	"1", //G-11
	"1", //H-01
	"1", //H-02
	"1", //H-03
	"1", //H-04
	"1", //H-05
	"1", //H-06
	"1", //H-07
	"1", //H-08
	"1", //H-09
	"1", //H-10
	"1", //H-11
	"1", //I-01
	"1", //I-02
	"1", //I-03
	"1", //I-04
	"1", //I-05
	"1", //I-06
	"1", //I-07
	"1", //I-08
	"1", //I-09
	"1", //I-10
	"1", //I-11
	"1", //J-01
	"1", //J-02
	"1", //J-03
	"1", //J-04
	"1", //J-05
	"1", //J-06
	"1", //J-07
	"1", //J-08
	"1", //J-09
	"1", //J-10
	"1", //J-11
	"1", //K-01
	"1", //K-02
	"1", //K-03
	"1", //K-04
	"1", //K-05
	"1", //K-06
	"1", //K-07
	"1", //K-08
	"1", //K-09
	"1", //K-10
	"1", //K-11
	"1", //L-01
	"1", //L-02
	"1", //L-03
	"1", //L-04
	"1", //L-05
	"1", //L-06
	"1", //L-07
	"1", //L-08
	"1", //L-09
	"1", //L-10
	"1", //L-11
	"1", //M-01
	"1", //M-02
	"1", //M-03
	"1", //M-04
	"1", //M-05
	"1", //M-06
	"1", //M-07
	"1", //M-08
	"1", //M-09
	"1", //M-10
	"1", //M-11
	"1", //N-01
	"1", //N-02
	"1", //N-03
	"1", //N-04
	"1", //N-05
	"1", //N-06
	"1", //N-07
	"1", //N-08
	"1", //N-09
	"1", //N-10
	"1", //N-11
	"1", //O-01
	"1", //O-02
	"1", //O-03
	"1", //O-04
	"1", //O-05
	"1", //O-06
	"1", //O-07
	"1", //O-08
	"1", //O-09
	"1", //O-10
	"1", //O-11
];
const timeArray75 = [
	"1:00", //A-01
	"1:00", //A-02
	"1:00", //A-03
	"1:00", //A-04
	"1:00", //A-05
	"1:00", //A-06
	"1:00", //A-07
	"1:00", //A-08
	"1:00", //A-09
	"1:00", //A-10
	"1:00", //A-11
	"1:00", //B-01
	"1:00", //B-02
	"1:00", //B-03
	"1:00", //B-04
	"1:00", //B-05
	"1:00", //B-06
	"1:00", //B-07
	"1:00", //B-08
	"1:00", //B-09
	"1:00", //B-10
	"1:00", //B-11
	"1:00", //C-01
	"1:00", //C-02
	"1:00", //C-03
	"1:00", //C-04
	"1:00", //C-05
	"1:00", //C-06
	"1:00", //C-07
	"1:00", //C-08
	"1:00", //C-09
	"1:00", //C-10
	"1:00", //C-11
	"1:00", //D-01
	"1:00", //D-02
	"1:00", //D-03
	"1:00", //D-04
	"1:00", //D-05
	"1:00", //D-06
	"1:00", //D-07
	"1:00", //D-08
	"1:00", //D-09
	"1:00", //D-10
	"1:00", //D-11
	"1:00", //E-01
	"1:00", //E-02
	"1:00", //E-03
	"1:00", //E-04
	"1:00", //E-05
	"1:00", //E-06
	"1:00", //E-07
	"1:00", //E-08
	"1:00", //E-09
	"1:00", //E-10
	"1:00", //E-11
	"1:00", //F-01
	"1:00", //F-02
	"1:00", //F-03
	"1:00", //F-04
	"1:00", //F-05
	"1:00", //F-06
	"1:00", //F-07
	"1:00", //F-08
	"1:00", //F-09
	"1:00", //F-10
	"1:00", //F-11
	"1:00", //G-01
	"1:00", //G-02
	"1:00", //G-03
	"1:00", //G-04
	"1:00", //G-05
	"1:00", //G-06
	"1:00", //G-07
	"1:00", //G-08
	"1:00", //G-09
	"1:00", //G-10
	"1:00", //G-11
	"1:00", //H-01
	"1:00", //H-02
	"1:00", //H-03
	"1:00", //H-04
	"1:00", //H-05
	"1:00", //H-06
	"1:00", //H-07
	"1:00", //H-08
	"1:00", //H-09
	"1:00", //H-10
	"1:00", //H-11
	"1:00", //I-01
	"1:00", //I-02
	"1:00", //I-03
	"1:00", //I-04
	"1:00", //I-05
	"1:00", //I-06
	"1:00", //I-07
	"1:00", //I-08
	"1:00", //I-09
	"1:00", //I-10
	"1:00", //I-11
	"1:00", //J-01
	"1:00", //J-02
	"1:00", //J-03
	"1:00", //J-04
	"1:00", //J-05
	"1:00", //J-06
	"1:00", //J-07
	"1:00", //J-08
	"1:00", //J-09
	"1:00", //J-10
	"1:00", //J-11
	"1:00", //K-01
	"1:00", //K-02
	"1:00", //K-03
	"1:00", //K-04
	"1:00", //K-05
	"1:00", //K-06
	"1:00", //K-07
	"1:00", //K-08
	"1:00", //K-09
	"1:00", //K-10
	"1:00", //K-11
	"1:00", //L-01
	"1:00", //L-02
	"1:00", //L-03
	"1:00", //L-04
	"1:00", //L-05
	"1:00", //L-06
	"1:00", //L-07
	"1:00", //L-08
	"1:00", //L-09
	"1:00", //L-10
	"1:00", //L-11
	"1:00", //M-01
	"1:00", //M-02
	"1:00", //M-03
	"1:00", //M-04
	"1:00", //M-05
	"1:00", //M-06
	"1:00", //M-07
	"1:00", //M-08
	"1:00", //M-09
	"1:00", //M-10
	"1:00", //M-11
	"1:00", //N-01
	"1:00", //N-02
	"1:00", //N-03
	"1:00", //N-04
	"1:00", //N-05
	"1:00", //N-06
	"1:00", //N-07
	"1:00", //N-08
	"1:00", //N-09
	"1:00", //N-10
	"1:00", //N-11
	"1:00", //O-01
	"1:00", //O-02
	"1:00", //O-03
	"1:00", //O-04
	"1:00", //O-05
	"1:00", //O-06
	"1:00", //O-07
	"1:00", //O-08
	"1:00", //O-09
	"1:00", //O-10
	"1:00", //O-11
];
const timeArray65 = [
	"2:00", //A-01
	"2:00", //A-02
	"2:00", //A-03
	"2:00", //A-04
	"2:00", //A-05
	"2:00", //A-06
	"2:00", //A-07
	"2:00", //A-08
	"2:00", //A-09
	"2:00", //A-10
	"2:00", //A-11
	"2:00", //B-01
	"2:00", //B-02
	"2:00", //B-03
	"2:00", //B-04
	"2:00", //B-05
	"2:00", //B-06
	"2:00", //B-07
	"2:00", //B-08
	"2:00", //B-09
	"2:00", //B-10
	"2:00", //B-11
	"2:00", //C-01
	"2:00", //C-02
	"2:00", //C-03
	"2:00", //C-04
	"2:00", //C-05
	"2:00", //C-06
	"2:00", //C-07
	"2:00", //C-08
	"2:00", //C-09
	"2:00", //C-10
	"2:00", //C-11
	"2:00", //D-01
	"2:00", //D-02
	"2:00", //D-03
	"2:00", //D-04
	"2:00", //D-05
	"2:00", //D-06
	"2:00", //D-07
	"2:00", //D-08
	"2:00", //D-09
	"2:00", //D-10
	"2:00", //D-11
	"2:00", //E-01
	"2:00", //E-02
	"2:00", //E-03
	"2:00", //E-04
	"2:00", //E-05
	"2:00", //E-06
	"2:00", //E-07
	"2:00", //E-08
	"2:00", //E-09
	"2:00", //E-10
	"2:00", //E-11
	"2:00", //F-01
	"2:00", //F-02
	"2:00", //F-03
	"2:00", //F-04
	"2:00", //F-05
	"2:00", //F-06
	"2:00", //F-07
	"2:00", //F-08
	"2:00", //F-09
	"2:00", //F-10
	"2:00", //F-11
	"2:00", //G-01
	"2:00", //G-02
	"2:00", //G-03
	"2:00", //G-04
	"2:00", //G-05
	"2:00", //G-06
	"2:00", //G-07
	"2:00", //G-08
	"2:00", //G-09
	"2:00", //G-10
	"2:00", //G-11
	"2:00", //H-01
	"2:00", //H-02
	"2:00", //H-03
	"2:00", //H-04
	"2:00", //H-05
	"2:00", //H-06
	"2:00", //H-07
	"2:00", //H-08
	"2:00", //H-09
	"2:00", //H-10
	"2:00", //H-11
	"2:00", //I-01
	"2:00", //I-02
	"2:00", //I-03
	"2:00", //I-04
	"2:00", //I-05
	"2:00", //I-06
	"2:00", //I-07
	"2:00", //I-08
	"2:00", //I-09
	"2:00", //I-10
	"2:00", //I-11
	"2:00", //J-01
	"2:00", //J-02
	"2:00", //J-03
	"2:00", //J-04
	"2:00", //J-05
	"2:00", //J-06
	"2:00", //J-07
	"2:00", //J-08
	"2:00", //J-09
	"2:00", //J-10
	"2:00", //J-11
	"2:00", //K-01
	"2:00", //K-02
	"2:00", //K-03
	"2:00", //K-04
	"2:00", //K-05
	"2:00", //K-06
	"2:00", //K-07
	"2:00", //K-08
	"2:00", //K-09
	"2:00", //K-10
	"2:00", //K-11
	"2:00", //L-01
	"2:00", //L-02
	"2:00", //L-03
	"2:00", //L-04
	"2:00", //L-05
	"2:00", //L-06
	"2:00", //L-07
	"2:00", //L-08
	"2:00", //L-09
	"2:00", //L-10
	"2:00", //L-11
	"2:00", //M-01
	"2:00", //M-02
	"2:00", //M-03
	"2:00", //M-04
	"2:00", //M-05
	"2:00", //M-06
	"2:00", //M-07
	"2:00", //M-08
	"2:00", //M-09
	"2:00", //M-10
	"2:00", //M-11
	"2:00", //N-01
	"2:00", //N-02
	"2:00", //N-03
	"2:00", //N-04
	"2:00", //N-05
	"2:00", //N-06
	"2:00", //N-07
	"2:00", //N-08
	"2:00", //N-09
	"2:00", //N-10
	"2:00", //N-11
	"2:00", //O-01
	"2:00", //O-02
	"2:00", //O-03
	"2:00", //O-04
	"2:00", //O-05
	"2:00", //O-06
	"2:00", //O-07
	"2:00", //O-08
	"2:00", //O-09
	"2:00", //O-10
	"2:00", //O-11
];
const timeArray55 = [
	"3:00", //A-01
	"3:00", //A-02
	"3:00", //A-03
	"3:00", //A-04
	"3:00", //A-05
	"3:00", //A-06
	"3:00", //A-07
	"3:00", //A-08
	"3:00", //A-09
	"3:00", //A-10
	"3:00", //A-11
	"3:00", //B-01
	"3:00", //B-02
	"3:00", //B-03
	"3:00", //B-04
	"3:00", //B-05
	"3:00", //B-06
	"3:00", //B-07
	"3:00", //B-08
	"3:00", //B-09
	"3:00", //B-10
	"3:00", //B-11
	"3:00", //C-01
	"3:00", //C-02
	"3:00", //C-03
	"3:00", //C-04
	"3:00", //C-05
	"3:00", //C-06
	"3:00", //C-07
	"3:00", //C-08
	"3:00", //C-09
	"3:00", //C-10
	"3:00", //C-11
	"3:00", //D-01
	"3:00", //D-02
	"3:00", //D-03
	"3:00", //D-04
	"3:00", //D-05
	"3:00", //D-06
	"3:00", //D-07
	"3:00", //D-08
	"3:00", //D-09
	"3:00", //D-10
	"3:00", //D-11
	"3:00", //E-01
	"3:00", //E-02
	"3:00", //E-03
	"3:00", //E-04
	"3:00", //E-05
	"3:00", //E-06
	"3:00", //E-07
	"3:00", //E-08
	"3:00", //E-09
	"3:00", //E-10
	"3:00", //E-11
	"3:00", //F-01
	"3:00", //F-02
	"3:00", //F-03
	"3:00", //F-04
	"3:00", //F-05
	"3:00", //F-06
	"3:00", //F-07
	"3:00", //F-08
	"3:00", //F-09
	"3:00", //F-10
	"3:00", //F-11
	"3:00", //G-01
	"3:00", //G-02
	"3:00", //G-03
	"3:00", //G-04
	"3:00", //G-05
	"3:00", //G-06
	"3:00", //G-07
	"3:00", //G-08
	"3:00", //G-09
	"3:00", //G-10
	"3:00", //G-11
	"3:00", //H-01
	"3:00", //H-02
	"3:00", //H-03
	"3:00", //H-04
	"3:00", //H-05
	"3:00", //H-06
	"3:00", //H-07
	"3:00", //H-08
	"3:00", //H-09
	"3:00", //H-10
	"3:00", //H-11
	"3:00", //I-01
	"3:00", //I-02
	"3:00", //I-03
	"3:00", //I-04
	"3:00", //I-05
	"3:00", //I-06
	"3:00", //I-07
	"3:00", //I-08
	"3:00", //I-09
	"3:00", //I-10
	"3:00", //I-11
	"3:00", //J-01
	"3:00", //J-02
	"3:00", //J-03
	"3:00", //J-04
	"3:00", //J-05
	"3:00", //J-06
	"3:00", //J-07
	"3:00", //J-08
	"3:00", //J-09
	"3:00", //J-10
	"3:00", //J-11
	"3:00", //K-01
	"3:00", //K-02
	"3:00", //K-03
	"3:00", //K-04
	"3:00", //K-05
	"3:00", //K-06
	"3:00", //K-07
	"3:00", //K-08
	"3:00", //K-09
	"3:00", //K-10
	"3:00", //K-11
	"3:00", //L-01
	"3:00", //L-02
	"3:00", //L-03
	"3:00", //L-04
	"3:00", //L-05
	"3:00", //L-06
	"3:00", //L-07
	"3:00", //L-08
	"3:00", //L-09
	"3:00", //L-10
	"3:00", //L-11
	"3:00", //M-01
	"3:00", //M-02
	"3:00", //M-03
	"3:00", //M-04
	"3:00", //M-05
	"3:00", //M-06
	"3:00", //M-07
	"3:00", //M-08
	"3:00", //M-09
	"3:00", //M-10
	"3:00", //M-11
	"3:00", //N-01
	"3:00", //N-02
	"3:00", //N-03
	"3:00", //N-04
	"3:00", //N-05
	"3:00", //N-06
	"3:00", //N-07
	"3:00", //N-08
	"3:00", //N-09
	"3:00", //N-10
	"3:00", //N-11
	"3:00", //O-01
	"3:00", //O-02
	"3:00", //O-03
	"3:00", //O-04
	"3:00", //O-05
	"3:00", //O-06
	"3:00", //O-07
	"3:00", //O-08
	"3:00", //O-09
	"3:00", //O-10
	"3:00", //O-11
];

document.addEventListener("DOMContentLoaded", function () {
	populateSiteOptions();
	const form = document.getElementById("distance-form");
	const convertForm = document.getElementById("converter-form");
	form.addEventListener("submit", calculateDistance);
	convertForm.addEventListener("submit", convertToHexadecimal);
});

function populateSiteOptions() {
	const siteSelect = document.getElementById("site1");
	sitesArray.forEach(function (group) {
		group.subGroups.forEach(function (subGroup) {
			const optgroup = document.createElement("optgroup");
			optgroup.label =
				group.groupName + " > " + subGroup.subGroupName + "\u00A0";
			subGroup.sites.forEach(function (site) {
				const option = document.createElement("option");
				option.value = site;
				option.textContent = site;
				optgroup.appendChild(option);
			});
			siteSelect.appendChild(optgroup);
		});
	});
}

function calculateDistance(event) {
	event.preventDefault();
	const site1 = document.getElementById("site1").value;

	let index = -1;
	let i = 0;

	sitesArray.forEach(function (group) {
		group.subGroups.forEach(function (subGroup) {
			subGroup.sites.forEach(function (site) {
				if (site === site1) {
					index = i;
				}
				i++;
			});
		});
	});

	const totalDistance = totalDistances[index];
	const pavedDistance = pavedDistances[index];
	const gravelDistance = gravelDistances[index];
	const time75 = timeArray75[index];
	const time65 = timeArray65[index];
	const time55 = timeArray55[index];

	displayResults(
		totalDistance,
		pavedDistance,
		gravelDistance,
		time75,
		time65,
		time55
	);
}

function displayResults(
	totalDistance,
	pavedDistance,
	gravelDistance,
	time75,
	time65,
	time55
) {
	const resultDiv = document.getElementById("result");
	resultDiv.innerHTML = "";

	const tableWrapper = document.createElement("div");
	tableWrapper.classList.add("result-table-wrapper");

	const table = document.createElement("table");

	const headerRow = document.createElement("tr");

	const headers = [
		"Total Distance",
		"Paved Distance",
		"Gravel Distance",
		"Time at 75 mph",
		"Time at 65 mph",
		"Time at 55 mph",
	];

	headers.forEach((headerText) => {
		const th = document.createElement("th");
		th.textContent = headerText;
		headerRow.appendChild(th);
	});

	table.appendChild(headerRow);

	const dataRow = document.createElement("tr");

	const dataValues = [
		`${totalDistance} mi`,
		`${pavedDistance} mi`,
		`${gravelDistance} mi`,
		time75,
		time65,
		time55,
	];

	dataValues.forEach((dataValue) => {
		const td = document.createElement("td");
		td.textContent = dataValue;
		dataRow.appendChild(td);
	});

	table.appendChild(dataRow);

	tableWrapper.appendChild(table);
	resultDiv.appendChild(tableWrapper);
}

function convertToHexadecimal(event) {
	event.preventDefault();
	const decimalInput = parseInt(
		document.getElementById("decimal-input").value,
		10
	);
	if (isNaN(decimalInput)) {
		alert("Please input a valid decimal number");
		return;
	}
	const hexResult = decimalInput.toString(16);
	displayHexResult(hexResult);
}

$("#decimal-form").submit(function (event) {
	event.preventDefault();
	var decimalNumber = $("#decimal-input").val();
	if (decimalNumber != "" && !isNaN(decimalNumber)) {
		var hexadecimalNumber = parseInt(decimalNumber).toString(16).toUpperCase();
		$("#hex-result").html(
			"<p>The hexadecimal equivalent of " +
				decimalNumber +
				" is: <strong>" +
				hexadecimalNumber +
				"</strong></p>"
		);
	} else {
		$("#hex-result").html("<p>Please enter a valid decimal number.</p>");
	}
});

function displayHexResult(hexResult) {
	const resultDiv = document.getElementById("hexResult");
	resultDiv.innerHTML = "";
	const result = document.createElement("p");
	result.textContent = `Hexadecimal representation: ${hexResult.toUpperCase()}`;
	resultDiv.appendChild(result);
}

async function showLicense(event, licensePath) {
	event.preventDefault();
	const response = await fetch(licensePath);
	const text = await response.text();
	document.getElementById("licenseText").innerText = text;
	document.getElementById("licenseModal").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
	const licenseModal = document.getElementById("licenseModal");
	const closeBtn = document.querySelector(".close");
	const licenseLinks = document.getElementsByClassName("licenseLink"); // get all elements with class licenseLink

	// iterate over all license links and attach event listener
	for (let i = 0; i < licenseLinks.length; i++) {
		licenseLinks[i].addEventListener("click", function (event) {
			event.preventDefault();
			showLicense(event, this.getAttribute("href")); // get the href attribute of the clicked link
		});
	}

	closeBtn.addEventListener("click", function () {
		licenseModal.style.display = "none";
	});

	window.addEventListener("click", function (event) {
		if (event.target === licenseModal) {
			licenseModal.style.display = "none";
		}
	});
});

function updateTime() {
	const localTimeElement = document.getElementById("local-time");
	const utcTimeElement = document.getElementById("utc-time");

	const date = new Date();

	let options = {
		timeZone: "America/Denver",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	};
	localTimeElement.textContent =
		"Mountain Time: " + new Intl.DateTimeFormat("en-US", options).format(date);

	options = {
		timeZone: "UTC",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	};
	utcTimeElement.textContent =
		"UTC Time: " + new Intl.DateTimeFormat("en-US", options).format(date);
}

// Call the updateTime function as soon as the script loads
updateTime();

// Update the time every second
setInterval(updateTime, 1000);

// replace this with your own API key
var apiKey = "1cd049292f30c5f0552b7d7c857364b4";

// the latitude and longitude for FE Warren AFB
var lat = 41.15;
var lon = -104.86;

function getWeather() {
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?lat=" +
			lat +
			"&lon=" +
			lon +
			"&appid=" +
			apiKey
	)
		.then((response) => response.json())
		.then((data) => {
			var locationElement = document.getElementById("location");
			var temperatureElement = document.getElementById("temperature");
			var descriptionElement = document.getElementById("description");

			locationElement.innerText = data.name;
			// OpenWeatherMap provides temperature in Kelvin by default, so convert it to Fahrenheit
			temperatureElement.innerText =
				Math.round(((data.main.temp - 273.15) * 9) / 5 + 32) + "°F";
			descriptionElement.innerText = data.weather[0].description;
		})
		.catch((error) => console.error(error));
}

// Call the function once when the page loads
getWeather();

// Then call it again every 4 minutes (240000 milliseconds)
setInterval(getWeather, 3600000);
