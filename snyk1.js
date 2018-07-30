

async function x() {
	var module = process.argv[2];
	var snyk=require('snyk');
	var temp=snyk.test(module);

	res = await temp
	console.log(res);
}

//setTimeout(x,100)
x()
