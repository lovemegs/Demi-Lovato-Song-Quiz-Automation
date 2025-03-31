import { $ } from '@wdio/globals'
import HomePage from './homePage.js';
import QuizInfo from './quizInfo.js'


class StartQuizPage extends HomePage {
    get startBtn () {
        return $('button#start-btn');
    }

    async start () {
        await this.startBtn.click();
        await expect(QuizInfo.startQuizBtn).toBeExisting();
    }

    open() {
        return super.open()
    }
}

export default new StartQuizPage();
