import { ScoreDto } from "./ScoreDto";
import { CardDto } from "./CardDto";

export interface ScoreboardDto {
    scores: ScoreDto[];
    scopas: CardDto[][];
}