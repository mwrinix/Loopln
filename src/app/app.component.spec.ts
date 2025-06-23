import { TestBed } from '@angular/core/testing';
import { AlertController, ModalController } from '@ionic/angular'; 

describe('AppComponent', () => {
  let alertControllerSpy: jasmine.SpyObj<AlertController>; 
  let modalControllerSpy: jasmine.SpyObj<ModalController>; 

  beforeEach(async () => {
    alertControllerSpy = jasmine.createSpyObj('AlertController', ['create']); 
    modalControllerSpy = jasmine.createSpyObj('ModalController', ['create']); 

    alertControllerSpy.create.and.returnValue(Promise.resolve({
      present: () => Promise.resolve(),
      onWillDismiss: () => Promise.resolve({ data: null, role: 'cancel' })
    } as any));

    modalControllerSpy.create.and.returnValue(Promise.resolve({
      present: () => Promise.resolve(),
      onWillDismiss: () => Promise.resolve({ data: null, role: 'cancel' })
    } as any));

    await TestBed.configureTestingModule({

      providers: [
        { provide: AlertController, useValue: alertControllerSpy }, 
        { provide: ModalController, useValue: modalControllerSpy },
      ],
  
    }).compileComponents();
  });

  // **IMPORTANTE:** Apague qualquer teste que esteja chamando modalControllerSpy.create com header/message/buttons.
  // Ou, se o teste realmente deveria testar um alerta, mude-o para usar alertControllerSpy.create.
  // Os testes gerados automaticamente geralmente são básicos, e você pode até remover testes que não são relevantes agora.
});