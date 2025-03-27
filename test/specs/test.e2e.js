// import { expect } from '@wdio/globals'
import StartQuiz from '../pageobjects/startQuiz.js'
import SongQuiz from '../pageobjects/songQuiz.js'
import QuizInfo from '../pageobjects/quizInfo.js'

describe('Demi Lovato Song Quiz', () => {
        it('should run through starting the quiz and selecting wrong and right answers', async () => {
           
            await StartQuiz.start();
            // await expect(QuizInfo.startQuizBtn).toBeExisting();
        })
})