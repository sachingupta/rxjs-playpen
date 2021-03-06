import './style.css';

import { of, map, Observable, fromEvent } from 'rxjs';
import {
  ObservableCreation,
  ObservableCreationFromEvent,
  ObservableCreationOf,
  subjectExample,
} from './creations';
import { ThrottleExample, OperatorsExample } from './operators';
import { stopWatch } from './examples/stopwatch/stopwatch';
import { dragDrop } from './examples/dragdrop';
import { pigLating } from './examples/pig-latin';

function executer(id: number) {
  switch (id) {
    case 1:
      ObservableCreation();
    case 2:
      ObservableCreationFromEvent();
    case 3:
      ObservableCreationOf();
    case 4:
      ThrottleExample();
    case 100:
      OperatorsExample();
    case 200:
      stopWatch();
      dragDrop();
      pigLating();
      subjectExample();
    case 201:
      stopWatch();
    case 202:
      dragDrop();
    case 203:
      pigLating();
  }
}

executer(200);

// Open the console in the bottom right to see results.
