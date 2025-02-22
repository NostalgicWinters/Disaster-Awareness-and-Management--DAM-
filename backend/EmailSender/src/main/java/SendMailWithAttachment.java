import com.mongodb.client.*;
import org.bson.Document;
import javax.mail.*;
import javax.mail.internet.*;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class SendMailWithAttachment 
{
    
    // Fetch Email from MongoDB Atlas
    public static List<String> fetchEmailsFromMongoDB() 
    {
        List<String> emailList = new ArrayList<>();

        // MongoDB Atlas Connection String
        String mongoUri = "mongodb+srv://admin:admin@backenddb.yino4.mongodb.net/?retryWrites=true&w=majority";
        
        try (MongoClient mongoClient = MongoClients.create(mongoUri)) 
        {
            MongoDatabase database = mongoClient.getDatabase("disaster_alerts");
            MongoCollection<Document> collection = database.getCollection("users");

            FindIterable<Document> users = collection.find();
            for (Document user : users) 
            {
                String email = user.getString("email");
                if (email != null) 
                {
                    emailList.add(email);
                }
            }
        }
        return emailList;
    }

    // Send Email with Attachment
    public void send(String to) throws IOException 
    {
        final String from = "yourEmail@gmail.com";  // Your email
        final String password = "yourAppPassword";  // Use Gmail App Password

        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        Session session = Session.getInstance(props, new Authenticator() 
                                              {
                                                protected PasswordAuthentication getPasswordAuthentication() 
                                                  {
                                                    return new PasswordAuthentication(from, password);
                                                  }
                                              });
     // Enable Debug Mode
        session.setDebug(true);

        try 
            {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            message.setSubject("Disaster ALERT !!! ");

            String msg = "This is to inform you that there is a disaster reported in your vicinity! Stay safe.";

            MimeBodyPart textPart = new MimeBodyPart();
            textPart.setContent(msg, "text/html");

            MimeBodyPart attachmentPart = new MimeBodyPart();
            attachmentPart.attachFile(new File("D:\\YUSHI_PRGMER\\FOSSHACK\\EMail\\Advisory.pdf"));

            Multipart multipart = new MimeMultipart();
            multipart.addBodyPart(textPart);
            multipart.addBodyPart(attachmentPart);
            message.setContent(multipart);

            Transport.send(message);
            System.out.println("Email sent to: " + to);

        }
        catch (MessagingException e) 
            {
            e.printStackTrace();
            }
    }
}


}*/
