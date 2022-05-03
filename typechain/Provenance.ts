/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ProvenanceInterface extends utils.Interface {
  functions: {
    "provenance()": FunctionFragment;
    "revealTimestamp()": FunctionFragment;
    "startingIndex()": FunctionFragment;
    "startingIndexBlock()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "provenance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revealTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startingIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startingIndexBlock",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "provenance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revealTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startingIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startingIndexBlock",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Provenance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ProvenanceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    provenance(overrides?: CallOverrides): Promise<[string]>;

    revealTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    startingIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    startingIndexBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  provenance(overrides?: CallOverrides): Promise<string>;

  revealTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  startingIndex(overrides?: CallOverrides): Promise<BigNumber>;

  startingIndexBlock(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    provenance(overrides?: CallOverrides): Promise<string>;

    revealTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    startingIndex(overrides?: CallOverrides): Promise<BigNumber>;

    startingIndexBlock(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    provenance(overrides?: CallOverrides): Promise<BigNumber>;

    revealTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    startingIndex(overrides?: CallOverrides): Promise<BigNumber>;

    startingIndexBlock(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    provenance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revealTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startingIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startingIndexBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}