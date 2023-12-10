
Vue.component('total-button', {

    template: /*html*/`
    <div class="root">
        <div class="row">
            <div class="col-6 col">
                <button
                @click="getTotal"
                class="btn-block">Посчитать</button>
            </div>
        </div>
        <!-- <div class="total" -->
        <div class="card">
            <div class="card-body">
                <div :class="{ hidden: isActive }">
                <p>Ваши {{ rub }} рублей</p>
                <p>По курсу доллара: {{ dol }}</p>
                <p>И курсу баты в доллар: {{ dolToBaht }}</p>
                <p>И курсу у менял: {{ rubM }}</p>
                <p>Через обменник на Пхукете вы получите: {{ totalBaht }}</p>
                <p>У менял вы получите: {{ totalBahtM }}</p>
            </div>
        </div>
        </div>
        
    </div> `,
    data() {
        return {
            rub: '',
            dol: '',
            dolToBaht: '',
            rubM: '',
            totalBaht: '',
            totalBahtM: '',
            isActive: true

        }
    },
    created() {
        eventBus.$on('rub', data => {
            this.rub = data;
        })

        eventBus.$on('dol', data => {
            this.dol = data;
        })
        eventBus.$on('dolToBaht', data => {
            this.dolToBaht = data;
        })
        eventBus.$on('rubM', data => {
            this.rubM = data;
        })
    },
    methods: {
        getTotal() {

            this.totalBaht = Math.floor((this.rub / this.dol) * this.dolToBaht)
            this.totalBahtM = Math.floor(this.rub / this.rubM)
            this.isActive = !this.isActive
        }
    }
})