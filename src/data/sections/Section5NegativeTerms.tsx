import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout, StepLayout, Step } from "@/components/layouts";
import {
    EditableH2,
    EditableH3,
    EditableParagraph,
    InlineClozeInput,
    InlineFormula,
} from "@/components/atoms";
import { getVariableInfo, clozePropsFromDefinition } from "../variables";

export const section5NegativeTermsBlocks: ReactElement[] = [
    // Section Heading
    <StackLayout key="layout-s5-heading" maxWidth="xl">
        <Block id="block-s5-heading" padding="md">
            <EditableH2 id="h2-s5-heading" blockId="block-s5-heading">
                Factorising with Negative Terms
            </EditableH2>
        </Block>
    </StackLayout>,

    // Introduction
    <StackLayout key="layout-s5-intro" maxWidth="xl">
        <Block id="block-s5-intro" padding="sm">
            <EditableParagraph id="para-s5-intro" blockId="block-s5-intro">
                Expressions with negative signs require extra care. Let's work through the key concepts step by step. Complete each step before moving to the next!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Step Layout for progressive learning
    <StackLayout key="layout-s5-steps" maxWidth="xl">
        <Block id="block-s5-steps" padding="md">
            <StepLayout varName="negativeTermsStep" showProgress={true} revealLabel="Continue →">
                {/* Step 1: Introduction to subtraction in factorisation */}
                <Step>
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                        <p className="font-semibold text-orange-800 dark:text-orange-200 mb-4 text-lg">Step 1: Understanding Subtraction</p>
                        <div className="space-y-3 text-foreground">
                            <p>When we have a subtraction, we keep the minus sign inside the bracket:</p>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center text-xl">
                                <span className="text-blue-600 dark:text-blue-400">4x</span> − <span className="text-red-600 dark:text-red-400">8</span> = 4(<span className="text-blue-600 dark:text-blue-400">x</span> − <span className="text-red-600 dark:text-red-400">2</span>)
                            </div>
                            <p className="text-muted-foreground">Notice: The minus sign stays with the 2 inside the bracket.</p>
                        </div>
                    </div>
                </Step>

                {/* Step 2: Worked Example with subtraction */}
                <Step>
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-xl p-6 border border-teal-200 dark:border-teal-800">
                        <p className="font-semibold text-teal-800 dark:text-teal-200 mb-4 text-lg">Step 2: Worked Example</p>
                        <p className="mb-4"><strong>Factorise: 6a − 9b</strong></p>
                        <div className="space-y-2 text-foreground">
                            <p>• HCF of 6 and 9 = <strong>3</strong></p>
                            <p>• 6a ÷ 3 = <strong>2a</strong></p>
                            <p>• 9b ÷ 3 = <strong>3b</strong></p>
                            <p className="text-xl font-semibold text-teal-700 dark:text-teal-300 pt-2">6a − 9b = 3(2a − 3b)</p>
                        </div>
                        <div className="mt-4 bg-teal-100 dark:bg-teal-900/50 rounded-lg p-3">
                            <p className="text-sm"><strong>Check:</strong> 3(2a − 3b) = 3×2a − 3×3b = 6a − 9b ✓</p>
                        </div>
                    </div>
                </Step>

                {/* Step 3: Negative common factor */}
                <Step>
                    <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 rounded-xl p-6 border border-red-200 dark:border-red-800">
                        <p className="font-semibold text-red-800 dark:text-red-200 mb-4 text-lg">Step 3: Negative Common Factors</p>
                        <div className="space-y-3 text-foreground">
                            <p>Sometimes it's useful to take out a <strong>negative</strong> common factor. This happens when:</p>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                <li>The first term is negative</li>
                                <li>You want to make the bracket start with a positive term</li>
                            </ul>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mt-4">
                                <p className="text-center text-xl">
                                    <span className="text-red-600 dark:text-red-400">−5m</span> − <span className="text-red-600 dark:text-red-400">10n</span> = <span className="text-red-600 dark:text-red-400">−5</span>(m + 2n)
                                </p>
                            </div>
                        </div>
                    </div>
                </Step>

                {/* Step 4: Key rule for negative factors */}
                <Step>
                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
                        <p className="font-semibold text-violet-800 dark:text-violet-200 mb-4 text-lg">Step 4: The Key Rule</p>
                        <div className="bg-amber-100 dark:bg-amber-900/50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
                            <p className="font-semibold text-amber-800 dark:text-amber-200">⚠️ Remember:</p>
                            <p className="text-foreground">When you take out a negative factor, <strong>all the signs inside the bracket change!</strong></p>
                        </div>
                        <div className="space-y-3 text-foreground">
                            <p>Let's see why:</p>
                            <p>−5m − 10n</p>
                            <p>= −5 × m + (−5) × 2n</p>
                            <p>= −5 × m − 5 × 2n</p>
                            <p>= −5(m + 2n)</p>
                            <p className="text-sm text-muted-foreground mt-2">The (−5) × 2n = −10n, so inside the bracket we write +2n</p>
                        </div>
                    </div>
                </Step>

                {/* Step 5: Quick check question */}
                <Step completionVarName="negativeCheckAnswer" autoAdvance>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                        <p className="font-semibold text-blue-800 dark:text-blue-200 mb-4 text-lg">Step 5: Quick Check</p>
                        <EditableParagraph id="para-s5-check" blockId="block-s5-steps">
                            If we factorise −6x − 9 by taking out a negative factor, what number goes outside the bracket?{" "}
                            <InlineClozeInput
                                varName="negativeCheckAnswer"
                                correctAnswer="-3"
                                {...clozePropsFromDefinition(getVariableInfo('negativeCheckAnswer'))}
                            />
                        </EditableParagraph>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mt-3">Hint: Find the HCF of 6 and 9, then make it negative</p>
                    </div>
                </Step>

                {/* Step 6: Summary */}
                <Step>
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800">
                        <p className="font-semibold text-emerald-800 dark:text-emerald-200 mb-4 text-lg">🎉 Well Done!</p>
                        <div className="space-y-3 text-foreground">
                            <p><strong>Summary of negative term factorisation:</strong></p>
                            <ol className="list-decimal list-inside space-y-2 ml-4">
                                <li>Find the HCF as usual</li>
                                <li>Keep minus signs inside the bracket for subtractions</li>
                                <li>If taking out a negative factor, change all signs inside the bracket</li>
                                <li>Always check by expanding!</li>
                            </ol>
                        </div>
                    </div>
                </Step>
            </StepLayout>
        </Block>
    </StackLayout>,

    // Differentiated Exercise Heading
    <StackLayout key="layout-s5-exercise-heading" maxWidth="xl">
        <Block id="block-s5-exercise-heading" padding="md">
            <EditableH3 id="h3-s5-exercise-heading" blockId="block-s5-exercise-heading">
                Differentiated Exercise 3: Negative Terms
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-s5-exercise-intro" maxWidth="xl">
        <Block id="block-s5-exercise-intro" padding="sm">
            <EditableParagraph id="para-s5-exercise-intro" blockId="block-s5-exercise-intro">
                Now practise factorising expressions with negative terms. Remember to check your signs carefully!
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Foundation Level
    <StackLayout key="layout-s5-foundation" maxWidth="xl">
        <Block id="block-s5-foundation" padding="md">
            <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Foundation</span>
                </div>
                <EditableParagraph id="para-s5-foundation" blockId="block-s5-foundation">
                    Factorise:{" "}
                    <InlineFormula latex="4x - 8" colorMap={{}} />{" "}
                    ={" "}
                    <InlineClozeInput
                        varName="ex3FoundationAnswer"
                        correctAnswer="4(x - 2)"
                        {...clozePropsFromDefinition(getVariableInfo('ex3FoundationAnswer'))}
                    />
                </EditableParagraph>
                <p className="text-sm text-green-600 dark:text-green-400 mt-3">Hint: HCF of 4 and 8 is 4. Keep the minus sign inside!</p>
            </div>
        </Block>
    </StackLayout>,

    // Standard Level
    <StackLayout key="layout-s5-standard" maxWidth="xl">
        <Block id="block-s5-standard" padding="md">
            <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Standard</span>
                </div>
                <EditableParagraph id="para-s5-standard" blockId="block-s5-standard">
                    Factorise:{" "}
                    <InlineFormula latex="6a - 9b" colorMap={{}} />{" "}
                    ={" "}
                    <InlineClozeInput
                        varName="ex3StandardAnswer"
                        correctAnswer="3(2a - 3b)"
                        {...clozePropsFromDefinition(getVariableInfo('ex3StandardAnswer'))}
                    />
                </EditableParagraph>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-3">Hint: What's the HCF of 6 and 9?</p>
            </div>
        </Block>
    </StackLayout>,

    // Challenge Level
    <StackLayout key="layout-s5-challenge" maxWidth="xl">
        <Block id="block-s5-challenge" padding="md">
            <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Challenge</span>
                </div>
                <EditableParagraph id="para-s5-challenge" blockId="block-s5-challenge">
                    Factorise:{" "}
                    <InlineFormula latex="-5m - 10n" colorMap={{}} />{" "}
                    ={" "}
                    <InlineClozeInput
                        varName="ex3ChallengeAnswer"
                        correctAnswer="-5(m + 2n)"
                        {...clozePropsFromDefinition(getVariableInfo('ex3ChallengeAnswer'))}
                    />
                </EditableParagraph>
                <p className="text-sm text-purple-600 dark:text-purple-400 mt-3">Take out −5 as the common factor. Remember: signs change inside the bracket!</p>
            </div>
        </Block>
    </StackLayout>,

    // Transition
    <StackLayout key="layout-s5-transition" maxWidth="xl">
        <Block id="block-s5-transition" padding="sm">
            <EditableParagraph id="para-s5-transition" blockId="block-s5-transition">
                Excellent work tackling those tricky negative terms! Now let's learn how to check your answers.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
