import { $, expect } from '@wdio/globals'
import StartQuiz from './startQuiz';

class ResetQuiz {
    get resetBtn () {
        return $('button.resetButton')
    }

    async resetClick () {
        await this.resetBtn.click();
        await expect(StartQuiz.startBtn).toBeExisting();
    }
}


export default new ResetQuiz();