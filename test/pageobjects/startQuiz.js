import { expect } from '@wdio/globals'
import Home from './home.js';


class StartQuiz extends Home {
  
    async start () {
        await this.startBtn.click();
        await expect(this.startQuizBtn).toBeExisting();
        await expect(this.title).toHaveHTML('<h2>Quiz Info</h2>')
    }

    async resetClick () {
        await this.resetBtn.click();
        await expect(this.startBtn).toBeExisting();
        await expect(this.startBtn).toHaveElementClass('start-btn');
    }

    openURL() {
        return super.openURL()
    }
}

export default new StartQuiz();
