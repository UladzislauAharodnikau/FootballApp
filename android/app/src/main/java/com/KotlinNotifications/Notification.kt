package com.footballapp

import android.app.NotificationChannel
import androidx.core.app.NotificationCompat;
import android.app.NotificationManager
import android.os.Build
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import android.graphics.Color
import com.facebook.react.bridge.ReactMethod

class NotificationModule: ReactContextBaseJavaModule {
    var loading: Boolean = false;

    lateinit var notificationManager: NotificationManager;

    private val channelId: String = "boltskills-id";

    lateinit var myContext: ReactApplicationContext;

    constructor(context: ReactApplicationContext): super(context) {
        this.loading = true;
        this.myContext = context;
    }

    override fun getName(): String {
        return "NotificationModule"
    }

    @ReactMethod
    fun trigger() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val notificationChannel = NotificationChannel(
                channelId,
                "My custom notification",
                NotificationManager.IMPORTANCE_HIGH
            )

            notificationChannel.description = "Channel description!"
            notificationChannel.enableLights(true)
            notificationChannel.lightColor = Color.RED

            notificationManager = myContext.getSystemService(NotificationManager:: class.java)
            notificationManager.createNotificationChannel(notificationChannel)
        }

        if (this.loading) {
            val notificationBuilder: NotificationCompat.Builder = NotificationCompat.Builder(myContext, channelId)

            notificationBuilder.setAutoCancel(true)
                .setWhen(System.currentTimeMillis())
                .setTicker("Hearty365")
                .setContentTitle("Notification Title")
                .setContentText("Notification Text")
                .setContentInfo("Notification Info")

            notificationManager.notify(1234, notificationBuilder.build())
        }
    }
}