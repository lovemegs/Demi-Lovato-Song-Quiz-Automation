import QuizInfo from '../pageobjects/quizInfo.js';
import SongQuiz from '../pageobjects/songQuiz.js';
import SongQuizNeg from '../pageobjects/songQuizNeg.js';
import StartQuiz from '../pageobjects/startQuiz.js'


describe('Demi Lovato Song Quiz', () => {
        it('should run through starting the quiz and selecting wrong and right answers', async () => {
            await StartQuiz.openURL();

            await StartQuiz.start();
            await QuizInfo.quizInfoBtns();

            await SongQuiz.answerBtnPos();
            await StartQuiz.resetClick();

            await StartQuiz.start();
            await QuizInfo.quizInfoBtns();
            await SongQuizNeg.answerBtnNeg();
        })
})