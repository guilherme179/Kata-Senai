 import {ScoreKeeper} from "../src/score-board"

 describe("ScoreKeeper", ()=>{

    const scoreKeeper = new ScoreKeeper()

    test("deve retornar o placar dos dois times", ()=>{
        scoreKeeper.scoreTeamA1()
        scoreKeeper.scoreTeamB3()
        let resposta = scoreKeeper.getScore()
        expect(resposta).toBe("001:003")
    })

    test("passando de 999 pontos deverá cravar em 999", ()=>{
        scoreKeeper.time1 = 1000;
        scoreKeeper.time2 = 1000;
        let resposta = scoreKeeper.getScore()
        expect(resposta).toBe("não poderá ultrapassar 999")
    })
 })
