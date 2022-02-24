const slider = document.querySelector('input[type=range]');
const billSwitch = document.querySelector('input[type=checkbox]');

const pageviews = document.getElementById('pageviews');
const billPrice = document.getElementById('billPrice');

window.addEventListener('load', function () {
	slider.value = '3';
	billSwitch.checked = false;
	billArr = monthlyBill;
	printBilling();
});

// change bill price based on monthly or yearly billing
let billArr = [];
billSwitch.addEventListener('click', function () {
	let isChecked = billSwitch.checked;
	if (isChecked) {
		billArr = yearlyBill;
		printBilling();
	} else {
		billArr = monthlyBill;
		printBilling();
	}
});

// displaying pageviews and billing on slider change
slider.addEventListener('input', function () {
	printBilling();
});

// change pageviews and bill price based on slider value
function printBilling() {
	switch (slider.value) {
		case '1':
			pageviews.innerHTML = '10k';
			billPrice.innerHTML = '$' + billArr[0] + '.00';
			break;
		case '2':
			pageviews.innerHTML = '50k';
			billPrice.innerHTML = '$' + billArr[1] + '.00';
			break;
		case '3':
			pageviews.innerHTML = '100k';
			billPrice.innerHTML = '$' + billArr[2] + '.00';
			break;
		case '4':
			pageviews.innerHTML = '500k';
			billPrice.innerHTML = '$' + billArr[3] + '.00';
			break;
		case '5':
			pageviews.innerHTML = '1m';
			billPrice.innerHTML = '$' + billArr[4] + '.00';
			break;
	}
}

// billing price
let monthlyBill = [8, 12, 16, 24, 36];
let yearlyBill = monthlyBill.map((bill) => {
	let yearSum = bill * 12;
	let sum = disc25(yearSum) / 12;
	return sum;
});

// calculate discount
function disc25(num) {
	let disc = num;
	return (disc -= disc * 0.25);
}
