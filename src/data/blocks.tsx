import { type ReactElement } from "react";

// Initialize variables and their colors from this file's variable definitions
import { useVariableStore, initializeVariableColors } from "@/stores";
import { getDefaultValues, variableDefinitions } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());
initializeVariableColors(variableDefinitions);

// Import section blocks
import { section1IntroductionBlocks } from "./sections/Section1Introduction";
import { section2CommonFactorsBlocks } from "./sections/Section2CommonFactors";

/**
 * ------------------------------------------------------------------
 * FACTORISATION OF LINEAR ALGEBRAIC EXPRESSIONS
 * Secondary 1 G3 - Singapore Mathematics
 * ------------------------------------------------------------------
 */

export const blocks: ReactElement[] = [
    // Section 1: Introduction - What is Factorisation?
    ...section1IntroductionBlocks,

    // Section 2: Finding Common Factors
    ...section2CommonFactorsBlocks,
];
