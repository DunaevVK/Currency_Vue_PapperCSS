Vue.component('current-currency-rub', {
    template: /*html*/`
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">Курс у менял на Пхукете (MoneyShop) : <span class="curPhuketBath"> {{ current }} руб за 1 бат</span></h4>
            <h4 class="card-subtitle">Выберите курс менялы на Пхукете:
                <select name="123" id="123"  @change="getCurentRubM">
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
            currentRubM: 2.75,
        }

    },
    created() {
        currencyMenyala.getCurrencyValue().then((data) => {
            this.current = (data.result.RUB_THBc.revRate).toFixed(2);

        });
    },
    computed: {
        begin() {
            return (+this.current - 0.1)
        },
        end() {
            return (+this.current + 0.1)
        },
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
    methods: {
        getCurentRubM() {
            this.currentRubM = event.target.value
            console.log('Выбран курс у менял: ', this.currentRubM)
            eventBus.$emit('rubM', this.currentRubM)
        }
    }
});