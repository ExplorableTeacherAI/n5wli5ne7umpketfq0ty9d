import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableH3,
    EditableParagraph,
    InlineClozeInput,
    InlineFormula,
} from "@/components/atoms";
import { getVariableInfo, clozePropsFromDefinition } from "../variables";

export const section6CheckingWorkBlocks: ReactElement[] = [
    // Section Heading
    <StackLayout key="layout-s6-heading" maxWidth="xl">
        <Block id="block-s6-heading" padding="md">
            <EditableH2 id="h2-s6-heading" blockId="block-s6-heading">
                Checking Your Work
            </EditableH2>
        </Block>
    </StackLayout>,

    // Introduction
    <StackLayout key="layout-s6-intro" maxWidth="xl">
        <Block id="block-s6-intro" padding="sm">
            <EditableParagraph id="para-s6-intro" blockId="block-s6-intro">
                The best way to check if your factorisation is correct is to <strong>expand</strong> your answer. If you get back the original expression, you know you've done it right!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Why checking is important
    <StackLayout key="layout-s6-why" maxWidth="xl">
        <Block id="block-s6-why" padding="md">
            <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🎯 Why Check?</p>
                <EditableParagraph id="para-s6-why" blockId="block-s6-why">
                    Checking helps you catch common mistakes like:
                </EditableParagraph>
                <ul className="list-disc list-inside mt-2 space-y-1 text-foreground ml-4">
                    <li>Wrong HCF (not fully factorised)</li>
                    <li>Sign errors with negative terms</li>
                    <li>Forgetting the +1 or −1</li>
                    <li>Calculation mistakes when dividing</li>
                </ul>
            </div>
        </Block>
    </StackLayout>,

    // How to check heading
    <StackLayout key="layout-s6-how-heading" maxWidth="xl">
        <Block id="block-s6-how-heading" padding="md">
            <EditableH3 id="h3-s6-how-heading" blockId="block-s6-how-heading">
                How to Check by Expansion
            </EditableH3>
        </Block>
    </StackLayout>,

    // Step-by-step checking
    <StackLayout key="layout-s6-steps" maxWidth="xl">
        <Block id="block-s6-steps" padding="md">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-4">Check: Is 4(2x + 3) the correct factorisation of 8x + 12?</p>

                <div className="space-y-4 text-foreground">
                    <div className="flex items-start gap-3">
                        <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">1</span>
                        <div>
                            <p><strong>Expand the bracket:</strong></p>
                            <p className="text-muted-foreground">Multiply each term inside by the number outside</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                        <p className="text-lg">4(2x + 3)</p>
                        <p className="text-lg">= 4 × 2x + 4 × 3</p>
                        <p className="text-lg">= 8x + 12</p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">2</span>
                        <div>
                            <p><strong>Compare with original:</strong></p>
                            <p>Original: 8x + 12</p>
                            <p>Expanded: 8x + 12</p>
                            <p className="text-emerald-600 dark:text-emerald-400 font-semibold mt-1">✓ They match! The factorisation is correct.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Block>
    </StackLayout>,

    // Example with error
    <StackLayout key="layout-s6-error-heading" maxWidth="xl">
        <Block id="block-s6-error-heading" padding="md">
            <EditableH3 id="h3-s6-error-heading" blockId="block-s6-error-heading">
                Catching Mistakes
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-s6-error" maxWidth="xl">
        <Block id="block-s6-error" padding="md">
            <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 rounded-xl p-6 border border-red-200 dark:border-red-800">
                <p className="font-semibold text-red-800 dark:text-red-200 mb-4">❌ Example of a mistake:</p>

                <div className="space-y-3 text-foreground">
                    <p>Student's answer: 6x + 9 = <span className="text-red-600 dark:text-red-400">2(3x + 9)</span></p>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <p><strong>Check by expanding:</strong></p>
                        <p>2(3x + 9) = 2 × 3x + 2 × 9 = 6x + 18</p>
                    </div>

                    <p className="text-red-600 dark:text-red-400">
                        ❌ 6x + 18 ≠ 6x + 9 — The answer is wrong!
                    </p>

                    <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded-lg p-4 mt-4">
                        <p><strong>Correct answer:</strong></p>
                        <p>6x + 9 = 3(2x + 3)</p>
                        <p className="text-sm text-muted-foreground">Check: 3 × 2x + 3 × 3 = 6x + 9 ✓</p>
                    </div>
                </div>
            </div>
        </Block>
    </StackLayout>,

    // Practice checking
    <StackLayout key="layout-s6-practice-heading" maxWidth="xl">
        <Block id="block-s6-practice-heading" padding="md">
            <EditableH3 id="h3-s6-practice-heading" blockId="block-s6-practice-heading">
                Your Turn: Check by Expanding
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-s6-practice" maxWidth="xl">
        <Block id="block-s6-practice" padding="md">
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-xl p-6 border border-teal-200 dark:border-teal-800">
                <EditableParagraph id="para-s6-practice" blockId="block-s6-practice">
                    A student wrote: <InlineFormula latex="3(x + 2)" colorMap={{}} />
                </EditableParagraph>
                <EditableParagraph id="para-s6-practice-2" blockId="block-s6-practice">
                    Expand this to check what the original expression was:{" "}
                    <InlineClozeInput
                        varName="checkWorkAnswer"
                        correctAnswer="3x + 6"
                        {...clozePropsFromDefinition(getVariableInfo('checkWorkAnswer'))}
                    />
                </EditableParagraph>
                <p className="text-sm text-teal-600 dark:text-teal-400 mt-3">Hint: Multiply 3 by each term inside the bracket</p>
            </div>
        </Block>
    </StackLayout>,

    // Quick reference card
    <StackLayout key="layout-s6-reference" maxWidth="xl">
        <Block id="block-s6-reference" padding="md">
            <div className="bg-amber-50 dark:bg-amber-950/30 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
                <p className="font-semibold text-amber-800 dark:text-amber-200 mb-4">📋 Quick Checking Checklist</p>
                <div className="space-y-2 text-foreground">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-amber-400" />
                        <span>Did I expand correctly?</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-amber-400" />
                        <span>Does my expanded answer match the original?</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-amber-400" />
                        <span>Did I use the highest common factor (fully factorised)?</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-amber-400" />
                        <span>Are all my signs correct?</span>
                    </label>
                </div>
            </div>
        </Block>
    </StackLayout>,

    // Transition
    <StackLayout key="layout-s6-transition" maxWidth="xl">
        <Block id="block-s6-transition" padding="sm">
            <EditableParagraph id="para-s6-transition" blockId="block-s6-transition">
                Well done! You've learned the complete process of factorisation. Now let's reflect on what you've learned today.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
