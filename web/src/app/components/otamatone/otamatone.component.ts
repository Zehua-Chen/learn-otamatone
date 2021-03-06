import { Component, Input, Output, EventEmitter } from '@angular/core';

import type { Labels, Note } from './configuration';
import { allNotes } from './configuration';
import { OtamatoneService } from './otamatone.service';

export type EnabledNotes = 'all' | Note[];

@Component({
  selector: 'app-otamatone, [app-otamatone]',
  templateUrl: './otamatone.component.html',
  styleUrls: ['./otamatone.component.scss'],
})
export class Otamatone {
  @Input()
  enabledNotes: EnabledNotes = 'all';

  @Output()
  onPlay: EventEmitter<Note> = new EventEmitter();

  @Input()
  labels: Labels = (position: Note) => `${position}`;

  public get stickWidth(): number {
    return 400;
  }

  public get stickHeight(): number {
    return 20;
  }

  public get stickStrokeWidth(): number {
    return 1;
  }

  public get buttonSize(): number {
    return 20;
  }

  public get faceSize(): number {
    return 250;
  }

  public get eyeSize(): number {
    return 20;
  }

  public get tailSeparatorSize(): number {
    return 10;
  }

  public get tailSize(): number {
    return 50;
  }

  public get allPositions(): readonly Note[] {
    return allNotes;
  }

  public get mousePoints(): string {
    return `
      ${this.faceSize / 2.5},${this.faceSize / 3}
      ${this.faceSize / 3},${this.faceSize / 2}
      ${this.faceSize / 2.5},${this.faceSize / 1.5}`;
  }

  public get spaceCount(): number {
    return this.allPositions.length - 1;
  }

  public get buttonSpace(): number {
    return this.allPositions.length * this.buttonSize;
  }

  public get spaceWidth(): number {
    return (this.stickWidth - this.buttonSpace) / this.spaceCount;
  }

  public isDisabled(position: Note): boolean {
    if (this.enabledNotes === 'all') {
      return false;
    }

    return this.enabledNotes.find((p) => p === position) === undefined;
  }

  constructor(private otamatoneService: OtamatoneService) {}

  public async play(position: Note): Promise<void> {
    await this.otamatoneService.play(position);
    this.onPlay.emit(position);
  }
}
