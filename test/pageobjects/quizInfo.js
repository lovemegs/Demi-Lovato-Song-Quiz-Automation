import { $, expect } from '@wdio/globals'
import StartQuizPage from './startQuiz';


class QuizInfo {
    get cancelBtn () {
        return $('button.cancel-btn')
    }
    get startQuizBtn () {
        return $('button.continue-btn')
    }
    get question () {
        return $('.question')
    }

    async hoverState () {
        await this.cancelBtn.moveTo();
        await this.startQuizBtn.moveTo();
    }
    async cancel () {
        await this.cancelBtn.click();
    }
    async startQuiz () {
        await this.startQuizBtn.click();
    }

    async quizInfoBtns () {
        await this.hoverState();
        await expect(this.cancelBtn).toBeClickable();
        await expect(this.startQuizBtn).toBeClickable();

        await this.cancel();
        await expect(StartQuizPage.startBtn).toBeExisting();

        await StartQuizPage.start();

        await this.startQuiz();
        await expect(this.question).toBeExisting();
    }
}

export default new QuizInfo();