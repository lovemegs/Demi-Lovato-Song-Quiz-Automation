// import { expect } from '@wdio/globals'
import QuizInfo from '../pageobjects/quizInfo.js';
import SongQuiz from '../pageobjects/songQuiz.js';
import StartQuizPage from '../pageobjects/startQuiz.js'

describe('Demi Lovato Song Quiz', () => {
        it('should run through starting the quiz and selecting wrong and right answers', async () => {
            await StartQuizPage.open();

            await StartQuizPage.start();
            await QuizInfo.quizInfoBtns();
        })
})