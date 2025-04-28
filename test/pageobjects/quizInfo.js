import { expect } from '@wdio/globals'
import StartQuiz from './startQuiz';
import Home from './home';


class QuizInfo extends Home {
   
    async quizInfoBtns () {
        await this.cancelBtn.moveTo();
        await this.startQuizBtn.moveTo();
        
        const startBgColor = await this.startQuizBtn.getCSSProperty('background-color');
        await expect(startBgColor.value).toBe('rgba(120,68,172,1)');
        const cancelBgColor = await this.cancelBtn.getCSSProperty('background-color');
        await expect(cancelBgColor.value).toBe('rgba(239,239,239,1)');

        await this.cancelBtn.click();
        await expect(this.startBtn).toBeExisting();
        await expect(this.startBtn).toHaveElementClass('start-btn');

        await StartQuiz.start();

        await this.startQuizBtn.click();
        await expect(this.question).toBeExisting();
        await expect(this.question).toHaveHTML(expect.stringContaining('1.'))
    }
}

export default new QuizInfo();