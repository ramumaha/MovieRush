import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropDown]'
})



export class DropDownDirective{
    @HostBinding('class.open') isOpen=false;

    @HostListener('click') toggleOpen(){
        this.isOpen=!this.isOpen;
    }
    


    

}