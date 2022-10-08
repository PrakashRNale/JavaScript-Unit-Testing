import { describe, expect, it } from "vitest";
import { generateReportData } from "./data";

describe('generateReportData()' ,() =>{

    it('should execute logFn function if provided', () =>{
        const logFnSpy = vi.fn();

        generateReportData(logFnSpy);

        expect(logFnSpy).toBeCalled();
    })

    it('should not execute logFn function if not provided', () =>{
        const logFnSpy = vi.fn();

        generateReportData();

        expect(logFnSpy).not.toBeCalled();
    })

    it('should execute logFn function only once',() =>{
        const logFnSpy = vi.fn();

        generateReportData(logFnSpy);

        expect(logFnSpy).toBeCalledTimes(1);
    })

    it('should execute logFn function with specific parameter',() =>{
        const logFnSpy = vi.fn();

        const data = 'Some dummy data for this demo app';

        generateReportData(logFnSpy);

        expect(logFnSpy).toBeCalledWith(data);
    })

})