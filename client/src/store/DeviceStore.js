import { makeAutoObservable } from "mobx"

export default class DeviseStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Freezor'},
            {id: 2, name: 'Smartphone'},
            {id: 3, name: 'Notebook'},
            {id: 4, name: 'TV'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'LG'},
            {id: 4, name: 'Panasonic'},
            {id: 5, name: 'Xiaomi'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: '25000', rating: 5, img: 'https://www.croma.com/apple-iphone-14-128gb-blue-/p/261934'},
            {id: 2, name: 'Iphone 12 pro', price: '25000', rating: 5, img: 'https://www.croma.com/apple-iphone-14-128gb-blue-/p/261934'},
            {id: 3, name: 'Iphone 12 pro', price: '25000', rating: 5, img: 'https://www.croma.com/apple-iphone-14-128gb-blue-/p/261934'},
            {id: 4, name: 'Iphone 12 pro', price: '25000', rating: 5, img: 'https://www.croma.com/apple-iphone-14-128gb-blue-/p/261934'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}
