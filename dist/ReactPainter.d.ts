/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
export interface CanvasProps {
    onMouseDown: React.MouseEventHandler<HTMLCanvasElement>;
    onTouchStart: React.TouchEventHandler<HTMLCanvasElement>;
    onMouseMove: React.MouseEventHandler<HTMLCanvasElement>;
    onTouchMove: React.TouchEventHandler<HTMLCanvasElement>;
    onMouseUp: React.MouseEventHandler<HTMLCanvasElement>;
    onTouchEnd: React.TouchEventHandler<HTMLCanvasElement>;
    style: React.CSSProperties;
    ref: (ref: HTMLCanvasElement) => void;
}
export interface PropsGetterInput extends Partial<CanvasProps> {
    [key: string]: any;
}
export interface PropsGetterResult extends CanvasProps {
    [key: string]: any;
}
export interface IRenderProps {
    canvas: JSX.Element;
    triggerSave: () => void;
    getCanvasProps: (props: PropsGetterInput) => PropsGetterResult;
}
export interface ReactPainterProps {
    height: number;
    width: number;
    render: (props: IRenderProps) => JSX.Element;
    color?: string;
    onSave?: (blob: Blob) => void;
    image: File | string;
}
export declare class ReactPainter extends React.Component<ReactPainterProps> {
    static propTypes: {
        height: PropTypes.Validator<any>;
        width: PropTypes.Validator<any>;
        render: PropTypes.Validator<any>;
        color: PropTypes.Requireable<any>;
        onSave: PropTypes.Requireable<any>;
        image: PropTypes.Requireable<any>;
    };
    static defaultProps: Partial<ReactPainterProps>;
    canvasRef: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    lastX: number;
    lastY: number;
    scalingFactor: number;
    state: {
        isDrawing: boolean;
        canvasWidth: number;
        canvasHeight: number;
    };
    extractOffSetFromEvent: (e: React.SyntheticEvent<HTMLCanvasElement>) => {
        offsetX: number;
        offsetY: number;
    };
    initializeCanvas: (width: number, height: number, image?: HTMLImageElement) => void;
    getDrawImageCanvasSize: (cWidth: number, cHeight: number, imageWidth: number, imageHeight: number) => number[];
    handleMouseDown: (e: React.SyntheticEvent<HTMLCanvasElement>) => void;
    handleMouseMove: (e: React.SyntheticEvent<HTMLCanvasElement>) => void;
    handleMouseUp: (e: React.SyntheticEvent<HTMLCanvasElement>) => void;
    handleSave: () => void;
    getCanvasProps: (props?: PropsGetterInput) => PropsGetterResult;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
