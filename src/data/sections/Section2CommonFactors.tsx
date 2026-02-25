import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout, SplitLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableParagraph,
    InlineScrubbleNumber,
    InlineTooltip,
} from "@/components/atoms";
import { getVariableInfo, numberPropsFromDefinition } from "../variables";
import { useVar } from "@/stores";

// Helper function to find all factors of a number
function getFactors(n: number): number[] {
    const factors: number[] = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// Helper function to find common factors of two numbers
function getCommonFactors(a: number, b: number): number[] {
    const factorsA = getFactors(a);
    const factorsB = getFactors(b);
    return factorsA.filter(f => factorsB.includes(f));
}

// Helper function to find HCF (GCD)
function getHCF(a: number, b: number): number {
    const common = getCommonFactors(a, b);
    return Math.max(...common);
}

// Interactive Common Factor Finder
function CommonFactorFinder() {
    const num1 = useVar('cfNumber1', 12) as number;
    const num2 = useVar('cfNumber2', 18) as number;

    const factors1 = getFactors(num1);
    const factors2 = getFactors(num2);
    const commonFactors = getCommonFactors(num1, num2);
    const hcf = getHCF(num1, num2);

    return (
        <div className="space-y-4">
            {/* Factors of first number */}
            <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
                <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-2">
                    Factors of <span className="font-bold">{num1}</span>:
                </p>
                <div className="flex flex-wrap gap-2">
                    {factors1.map(f => (
                        <span
                            key={f}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                commonFactors.includes(f)
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                            }`}
                        >
                            {f}
                        </span>
                    ))}
                </div>
            </div>

            {/* Factors of second number */}
            <div className="bg-pink-50 dark:bg-pink-950/30 rounded-lg p-4 border border-pink-200 dark:border-pink-800">
                <p className="text-sm font-medium text-pink-700 dark:text-pink-300 mb-2">
                    Factors of <span className="font-bold">{num2}</span>:
                </p>
                <div className="flex flex-wrap gap-2">
                    {factors2.map(f => (
                        <span
                            key={f}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                commonFactors.includes(f)
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300'
                            }`}
                        >
                            {f}
                        </span>
                    ))}
                </div>
            </div>

            {/* Common factors highlighted */}
            <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800">
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-2">
                    Common Factors (highlighted in green above):
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                    {commonFactors.map(f => (
                        <span
                            key={f}
                            className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-500 text-white"
                        >
                            {f}
                        </span>
                    ))}
                </div>
                <p className="mt-3 text-emerald-800 dark:text-emerald-200 font-semibold">
                    Highest Common Factor (HCF): <span className="text-xl">{hcf}</span>
                </p>
            </div>
        </div>
    );
}

export const section2CommonFactorsBlocks: ReactElement[] = [
    // Section Heading
    <StackLayout key="layout-cf-heading" maxWidth="xl">
        <Block id="block-cf-heading" padding="md">
            <EditableH2 id="h2-cf-heading" blockId="block-cf-heading">
                Finding Common Factors
            </EditableH2>
        </Block>
    </StackLayout>,

    // Introduction paragraph
    <StackLayout key="layout-cf-intro" maxWidth="xl">
        <Block id="block-cf-intro" padding="sm">
            <EditableParagraph id="para-cf-intro" blockId="block-cf-intro">
                Before we can factorise an expression, we need to find the{" "}
                <InlineTooltip tooltip="The highest common factor (HCF) is the largest number that divides evenly into all terms.">
                    highest common factor (HCF)
                </InlineTooltip>{" "}
                of the terms. Let's practise finding common factors with numbers first.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Split Layout: Instructions on left, Interactive tool on right
    <SplitLayout key="layout-cf-interactive" ratio="1:1" gap="lg">
        <div className="space-y-4">
            <Block id="block-cf-instructions" padding="sm">
                <EditableParagraph id="para-cf-instructions" blockId="block-cf-instructions">
                    Change the numbers below to explore their factors. Notice how some factors appear in both lists — these are the <strong>common factors</strong>.
                </EditableParagraph>
            </Block>
            <Block id="block-cf-numbers" padding="sm">
                <EditableParagraph id="para-cf-numbers" blockId="block-cf-numbers">
                    First number:{" "}
                    <InlineScrubbleNumber
                        varName="cfNumber1"
                        {...numberPropsFromDefinition(getVariableInfo('cfNumber1'))}
                    />
                </EditableParagraph>
            </Block>
            <Block id="block-cf-numbers-2" padding="sm">
                <EditableParagraph id="para-cf-numbers-2" blockId="block-cf-numbers-2">
                    Second number:{" "}
                    <InlineScrubbleNumber
                        varName="cfNumber2"
                        {...numberPropsFromDefinition(getVariableInfo('cfNumber2'))}
                    />
                </EditableParagraph>
            </Block>
            <Block id="block-cf-tip" padding="sm">
                <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-3 rounded-r-lg">
                    <EditableParagraph id="para-cf-tip" blockId="block-cf-tip">
                        <strong>Tip:</strong> The HCF is the largest common factor. This is the number we take outside the bracket when factorising!
                    </EditableParagraph>
                </div>
            </Block>
        </div>
        <Block id="block-cf-finder" padding="sm">
            <CommonFactorFinder />
        </Block>
    </SplitLayout>,

    // Algebraic terms explanation
    <StackLayout key="layout-cf-algebraic" maxWidth="xl">
        <Block id="block-cf-algebraic" padding="md">
            <EditableH2 id="h2-cf-algebraic" blockId="block-cf-algebraic">
                Finding Common Factors in Algebraic Terms
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cf-algebraic-intro" maxWidth="xl">
        <Block id="block-cf-algebraic-intro" padding="sm">
            <EditableParagraph id="para-cf-algebraic-intro" blockId="block-cf-algebraic-intro">
                When finding common factors in algebraic expressions, we look for both <strong>numerical factors</strong> (numbers) and <strong>variable factors</strong> (letters like x, y, a, b).
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Example box
    <StackLayout key="layout-cf-example" maxWidth="xl">
        <Block id="block-cf-example" padding="md">
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
                <p className="font-semibold text-violet-800 dark:text-violet-200 mb-4">Example: Find the HCF of 6x and 9</p>
                <div className="space-y-3 text-foreground">
                    <p>Step 1: Find factors of 6x → 1, 2, 3, 6, x, 2x, 3x, 6x</p>
                    <p>Step 2: Find factors of 9 → 1, 3, 9</p>
                    <p>Step 3: Common factors → 1, 3</p>
                    <p className="font-semibold text-violet-700 dark:text-violet-300">HCF = 3</p>
                </div>
            </div>
        </Block>
    </StackLayout>,

    // Second example with variables
    <StackLayout key="layout-cf-example-2" maxWidth="xl">
        <Block id="block-cf-example-2" padding="md">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-xl p-6 border border-teal-200 dark:border-teal-800">
                <p className="font-semibold text-teal-800 dark:text-teal-200 mb-4">Example: Find the HCF of 4xy and 8x</p>
                <div className="space-y-3 text-foreground">
                    <p>Step 1: Find numerical HCF → HCF(4, 8) = 4</p>
                    <p>Step 2: Find common variables → both have x</p>
                    <p className="font-semibold text-teal-700 dark:text-teal-300">HCF = 4x</p>
                </div>
            </div>
        </Block>
    </StackLayout>,

    // Transition
    <StackLayout key="layout-cf-transition" maxWidth="xl">
        <Block id="block-cf-transition" padding="sm">
            <EditableParagraph id="para-cf-transition" blockId="block-cf-transition">
                Now that you can find common factors, let's use this skill to factorise expressions!
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
