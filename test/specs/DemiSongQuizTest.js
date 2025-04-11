import QuizInfo from '../pageobjects/quizInfo.js';
import SongQuiz from '../pageobjects/songQuiz.js';
import SongQuizNeg from '../pageobjects/songQuizNeg.js';
import StartQuizPage from '../pageobjects/startQuiz.js'
import ResetQuiz from '../pageobjects/resetQuiz.js';

describe('Demi Lovato Song Quiz', () => {
        it('should run through starting the quiz and selecting wrong and right answers', async () => {
            await StartQuizPage.open();

            await StartQuizPage.start();
            await QuizInfo.quizInfoBtns();

            await SongQuiz.answerBtnPos();
            await ResetQuiz.resetClick();

            await StartQuizPage.start();
            await QuizInfo.quizInfoBtns();
            await SongQuizNeg.answerBtnNeg();
        })
})