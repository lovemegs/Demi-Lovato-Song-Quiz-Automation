import { $ } from '@wdio/globals'
import Page from './page.js';
import QuizInfo from './quizInfo.js'


class StartQuiz extends Page {
    get startBtn () {
        return $('button#start-btn');
    }

    async start () {
        await this.open();
        await this.startBtn.click();
        await expect(QuizInfo.startQuizBtn).toBeExisting();
    }


}

export default new StartQuiz();
