/* eslint-disable no-undef */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
    // constructor(...args) {
    //     super(...args);
    //     this.isLarge = true;
    // }
    @tracked isLarge = false;

    @action toggleSizes(){
        this.isLarge = !this.isLarge;
    }
}
