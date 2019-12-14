let   calculate = document.getElementById('start'),
		budgetV = document.querySelector('.budget-value'),
		Dbudget = document.querySelector('.daybudget-value'),
		LevelV = document.querySelector('.level-value'),
		expensesV = document.querySelector('.expenses-value'),
		optionalexpensesV = document.querySelector('.optionalexpenses-value'),
		incomeV = document.querySelector('.income-value'),
		monthsavingsValue = document.querySelector('.monthsavings-value'),
		yearsavingsV = document.querySelector('.yearsavings-value'),
		chooseExpenses = document.getElementsByClassName('expenses-item'),
		btnApprove = document.querySelector('.expenses-item-btn'),
		btnApprove2 = document.querySelector('.optionalexpenses-btn'),
		calc = document.querySelector('.count-budget-btn'),
		optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
		possibleIncome = document.querySelector('.choose-income'),
		checkBox = document.querySelector('#savings'),
		summ = document.querySelector('.choose-sum'),
		percentSumm = document.querySelector('.choose-percent'),
		year = document.querySelector('.year-value'),
		month = document.querySelector('.month-value'),
		day = document.querySelector('.day-value');

let money, time;

 	calculate.addEventListener('click', function() {
 		time = prompt("Введите дату в формате YYYY-MM-DD", '');
 		money = +prompt("Ваш бюджет на месяц?", '');

 		while(isNaN(money) || money == '' || money == null ) {
 			money = +prompt("Ваш бюджет на месяц?", '');
 		}
 		appData.budget = money;
 		appData.timeData = time;
 		budgetV.textContent = money.toFixed();
 		year.value = new Date(Date.parse(time)).getFullYear();
 		month.value = new Date(Date.parse(time)).getMonth() + 1;
 		day.value = new Date(Date.parse(time)).getDate();
 	});

 	btnApprove.addEventListener('click',function() {
 		let sum = 0;
 		for(let i = 0; i < chooseExpenses.length; i++){
	 		let a = chooseExpenses[i].value,
				 b = chooseExpenses[++i].value;

				if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
					console.log('done');
					appData.expenses[a] = b;
					sum += +b;
				}else {
					i = i - 1;
				}
	 		}
	 		expensesV.textContent = sum;
 	});

 	btnApprove2.addEventListener('click', function() {
 		for(let i = 0; i < optionalExpenses.length; i++){
			let opt = optionalExpenses[i].value;
			appData.optionalExpenses[i] = opt;
			optionalexpensesV.textContent += appData.optionalExpenses[i] + ' ';
		}
 	});

 	calc.addEventListener('click', function(){

 		if(appData.budget != undefined) {
	 		appData.moneyPerDay = (appData.budget / 30).toFixed();
			Dbudget.textContent = appData.moneyPerDay;

			if(appData.moneyPerDay < 800) {
				LevelV.textContent = 'Минимальный уровень достатка';
			} else if (appData.moneyPerDay < 800 || appData.moneyPerDay < 2000) {
				LevelV.textContent = 'Средний уровень достатка';
			} else if (appData.moneyPerDay > 2000) {
				LevelV.textContent = 'Высокий уровень достатка';
			} else {
				LevelV.textContent = 'Произошла ошибка';
			}
 		}else {
 			Dbudget.textContent = 'Введите данные';
 		};
 	});

 	possibleIncome.addEventListener('input',function(){
		let items = possibleIncome.value;
			 appData.income = items.split(', ');
			 incomeV.textContent = appData.income;
 	});

 	checkBox.addEventListener('click', function() {
 		if(appData.savings == true){
 			appData.savings = false;
 		}else {
 			appData.savings = true;
 		}
 	});

 	summ.addEventListener('input', function(){
 		if(appData.savings == true){
			let sum = +summ.value,
				 percent = +percentSumm.value;
			appData.monthIncome = sum/100/12*percent;
			appData.yearIncome = sum/100*percent;

			monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
			yearsavingsV.textContent = appData.monthIncome.toFixed(1);
 		}
 	});

	percentSumm.addEventListener('input', function(){
		if(appData.savings == true){
			let sum = +summ.value,
			percent = +percentSumm.value;
			appData.monthIncome = sum/100/12*percent;
			appData.yearIncome = sum/100*percent;

			monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
			yearsavingsV.textContent = appData.monthIncome.toFixed(1);
		}
	});

	let appData = {
		budget: money,
		expenses: {},
		optionalExpenses: {},
		income: [],
		timeData: time,
		savings: false
	};

	//checkSavings();


//budgetV.style.borderBottom = '1px solid #ff964b';



