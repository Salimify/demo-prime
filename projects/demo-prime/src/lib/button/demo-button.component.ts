import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {ButtonModule} from "primeng/button";

@Component({
    selector: 'demo-button',
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './demo-button.component.html',
    styleUrls: ['./demo-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoButtonComponent {
    @Input() label?: string;
    @Input() icon?: string;
    @Input() iconPos: 'left' | 'right' = 'left';
    @Input() severity?: string;
    @Input() disabled = false;
    @Input() loading = false;

    @Output() onClick = new EventEmitter<MouseEvent>();

    handleClick(event: MouseEvent) {
        if (!this.disabled && !this.loading) {
            this.onClick.emit(event);
        }
    }
}
