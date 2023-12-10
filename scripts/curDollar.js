Vue.component('current-currency-dollar', {
    template: /*html*/`
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">Текущий курс доллара в РФ   : <span class="curPhuketBath"> {{ current }} руб за 1$</span></h4>
            <h4 class="card-subtitle">Выберите курс доллара в РФ:
                <!-- <select v-model="setOption" name="123" id="123"> -->
                <select name="123" id="123" @change="saveDollar">
                    <option
                     v-for="option in optionGenerate"
                     :value="option"
                     :selected="option == current"
                    >{{ option }}</option>
                </select>
             </h4>
        </div>
    </div>`,
    data() {
        return {
            current: null,
            currentDollar: 92.15,
            begin: 85.00,
            end: 100.00,
            // setOption: null
        }

    },
    created() {
        currencyDollar.getCurrencyValue().then((data) => {
            this.current = (data.rates.RUB).toFixed(2);

            // console.log(this.current)
        });

    },

    computed: {
        optionGenerate() {
            let str = [];
            for (i = this.begin; i < this.end; i = i + 0.05) {
                str.push(i.toFixed(2));
            }
            // this.selectedDefault()
            return str;
        },


    },
    methods: {
        saveDollar() {
            this.currentDollar = event.target.value
            console.log('Выбран курс доллара в РФ: ', this.currentDollar)
            eventBus.$emit('dol', this.currentDollar)
        }


    },

});