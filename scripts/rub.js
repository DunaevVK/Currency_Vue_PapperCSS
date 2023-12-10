// import { EventBus } from './app'
Vue.component('current-rubles', {
    template: /*html*/`
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">Сколько у вас есть рублей?</h4>
            <input type="text" name="" value="" id="rubles" @input="saveRub">
        </div>
    </div>`,
    data() {
        return {
            value: null
        }
    },
    computed: {

    },
    methods: {
        saveRub() {
            this.value = event.target.value
            console.log('У вас ', this.value, 'рублей')
            eventBus.$emit('rub', this.value)
        }
    },

})