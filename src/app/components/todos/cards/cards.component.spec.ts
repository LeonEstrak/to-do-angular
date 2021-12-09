// import { HttpClientModule } from '@angular/common/http';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
// import { Student } from 'src/app/models/student.model';

// import { CardsComponent } from './cards.component';

// describe('CardsComponent', () => {
//   let component: CardsComponent;
//   let fixture: ComponentFixture<CardsComponent>;
//   let mockData: Student = {
//     id: 1,
//     rollno: '1',
//     name: 'test',
//     age: 2,
//   };
//   const mockDialogRef = {
//     close: jasmine.createSpy('close'),
//     data: mockData,
//   };

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [CardsComponent],
//       imports: [MatDialogModule, HttpClientModule],
//       providers: [
//         {
//           provide: MatDialogRef,
//           useValue: mockDialogRef,
//         },
//       ],
//     }).compileComponents();
//   });
//   beforeEach(() => {
//     fixture = TestBed.createComponent(CardsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeDefined();
//   });
// });
