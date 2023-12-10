Vue.component('current-currency-baht', {
    template: /*html*/`
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">Текущий курс бата в Value+   : <span class="curPhuketBath"> {{ current }} за 1$</span></h4>
            <h4 class="card-subtitle">Выберите курс бата на Пхукете:
                <!-- <select v-model="current" name="123" id="123"> -->
                <select name="123" id="123" @change="saveDollarToBaht">
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
            currentDollarToBaht: 35.15,
            begin: 33.50,
            end: 35.50,
        }

    },
    computed: {
        optionGenerate() {
            let str = [];
            for (i = this.begin; i < this.end; i = i + 0.01) {
                str.push(i.toFixed(2));
            }
            return str;
        },
        // selectedDefault() {
        //     return ((this.begin + this.end) / 2).toFixed(2)
        // }
    },
    created() {
        currencyValuePlus.getCurrencyValue().then((data) => {
            this.current = (data.result[0].crate).slice(0, 5);

            // console.log(this.current)
        });
    },
    methods: {
        saveDollarToBaht() {
            this.currentDollarToBaht = event.target.value
            console.log('Выбран курс в обменнике на Пхукете: ', this.currentDollarToBaht)
            eventBus.$emit('dolToBaht', this.currentDollarToBaht)
        }
    }
});