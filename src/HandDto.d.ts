import { CardDto } from "./CardDto";
import { PlayerDto } from "./PlayerDto";

export interface HandDto {
    cards: CardDto[];
    player: PlayerDto;
    captured: CardDto[];
}