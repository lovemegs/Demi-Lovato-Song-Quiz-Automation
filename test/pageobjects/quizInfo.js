import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'


class QuizInfo {
    get cancelBtn () {
        return $('button.cancel-btn')
    }
    get startQuizBtn () {
        return $('button.continue-btn')
    }

}

export default new QuizInfo();