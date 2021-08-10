/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface GatewayRouterInterface extends ethers.utils.Interface {
  functions: {
    'calculateL2TokenAddress(address)': FunctionFragment
    'counterpartGateway()': FunctionFragment
    'defaultGateway()': FunctionFragment
    'finalizeInboundTransfer(address,address,address,uint256,bytes)': FunctionFragment
    'getGateway(address)': FunctionFragment
    'getOutboundCalldata(address,address,address,uint256,bytes)': FunctionFragment
    'isRouter()': FunctionFragment
    'l1TokenToGateway(address)': FunctionFragment
    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)': FunctionFragment
    'router()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'calculateL2TokenAddress',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'counterpartGateway',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'defaultGateway',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'finalizeInboundTransfer',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'getGateway', values: [string]): string
  encodeFunctionData(
    functionFragment: 'getOutboundCalldata',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'isRouter', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'l1TokenToGateway',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'outboundTransfer',
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(functionFragment: 'router', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'calculateL2TokenAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'counterpartGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'defaultGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'finalizeInboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getGateway', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getOutboundCalldata',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'isRouter', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'l1TokenToGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'outboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result

  events: {
    'DefaultGatewayUpdated(address)': EventFragment
    'GatewaySet(address,address)': EventFragment
    'InboundTransferFinalized(address,address,address,uint256,uint256,bytes)': EventFragment
    'OutboundTransferInitiated(address,address,address,uint256,uint256,bytes)': EventFragment
    'TransferRouted(address,address,address,address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'DefaultGatewayUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'GatewaySet'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'InboundTransferFinalized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OutboundTransferInitiated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TransferRouted'): EventFragment
}

export class GatewayRouter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: GatewayRouterInterface

  functions: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    counterpartGateway(overrides?: CallOverrides): Promise<[string]>

    defaultGateway(overrides?: CallOverrides): Promise<[string]>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getGateway(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { gateway: string }>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    isRouter(overrides?: CallOverrides): Promise<[boolean]>

    l1TokenToGateway(arg0: string, overrides?: CallOverrides): Promise<[string]>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    router(overrides?: CallOverrides): Promise<[string]>
  }

  calculateL2TokenAddress(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  counterpartGateway(overrides?: CallOverrides): Promise<string>

  defaultGateway(overrides?: CallOverrides): Promise<string>

  finalizeInboundTransfer(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getGateway(_token: string, overrides?: CallOverrides): Promise<string>

  getOutboundCalldata(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  isRouter(overrides?: CallOverrides): Promise<boolean>

  l1TokenToGateway(arg0: string, overrides?: CallOverrides): Promise<string>

  outboundTransfer(
    _token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  router(overrides?: CallOverrides): Promise<string>

  callStatic: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    counterpartGateway(overrides?: CallOverrides): Promise<string>

    defaultGateway(overrides?: CallOverrides): Promise<string>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    getGateway(_token: string, overrides?: CallOverrides): Promise<string>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    isRouter(overrides?: CallOverrides): Promise<boolean>

    l1TokenToGateway(arg0: string, overrides?: CallOverrides): Promise<string>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    router(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    DefaultGatewayUpdated(
      newDefaultGateway?: null
    ): TypedEventFilter<[string], { newDefaultGateway: string }>

    GatewaySet(
      l1Token?: string | null,
      gateway?: string | null
    ): TypedEventFilter<[string, string], { l1Token: string; gateway: string }>

    InboundTransferFinalized(
      token?: null,
      _from?: string | null,
      _to?: string | null,
      _transferId?: BigNumberish | null,
      _amount?: null,
      _data?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, string],
      {
        token: string
        _from: string
        _to: string
        _transferId: BigNumber
        _amount: BigNumber
        _data: string
      }
    >

    OutboundTransferInitiated(
      token?: null,
      _from?: string | null,
      _to?: string | null,
      _transferId?: BigNumberish | null,
      _amount?: null,
      _data?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, string],
      {
        token: string
        _from: string
        _to: string
        _transferId: BigNumber
        _amount: BigNumber
        _data: string
      }
    >

    TransferRouted(
      token?: string | null,
      _userFrom?: string | null,
      _userTo?: string | null,
      gateway?: null
    ): TypedEventFilter<
      [string, string, string, string],
      { token: string; _userFrom: string; _userTo: string; gateway: string }
    >
  }

  estimateGas: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    counterpartGateway(overrides?: CallOverrides): Promise<BigNumber>

    defaultGateway(overrides?: CallOverrides): Promise<BigNumber>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getGateway(_token: string, overrides?: CallOverrides): Promise<BigNumber>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    isRouter(overrides?: CallOverrides): Promise<BigNumber>

    l1TokenToGateway(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    router(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    counterpartGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>

    defaultGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getGateway(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    isRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l1TokenToGateway(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
