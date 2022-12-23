package com.footballapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

import com.facebook.react.bridge.ReactMethod

class Counter(reactContent: ReactApplicationContext): ReactContextBaseJavaModule(reactContent) {
    private val NAME = "CounterModule"

    private var count = 0

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun increase() {
        this.count++
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun decrease() {
        this.count--
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getCountValue(): Int {
        return this.count
    }

    override fun getName(): String {
        return this.NAME
    }
}